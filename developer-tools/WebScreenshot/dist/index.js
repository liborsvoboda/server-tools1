import process from 'node:process';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import os from 'node:os';
import { EventEmitter } from 'node:events';
import captureWebsite from 'capture-website';
import pMemoize from 'p-memoize';
import filenamify from 'filenamify';
import { unusedFilename } from 'unused-filename';
import arrayUniq from 'array-uniq';
import arrayDiffer from 'array-differ';
import { format as formatDate } from 'date-fns';
import getResolutions from 'get-res';
import logSymbols from 'log-symbols';
import { makeDirectory } from 'make-dir';
import viewportList from 'viewport-list';
import template from 'lodash.template';
import plur from 'plur';
import filenamifyUrl from 'filenamify-url';
import pMap from 'p-map';
const cpuCount = os.cpus().length;
const getResolutionsMemoized = pMemoize(getResolutions);
// @ts-expect-error - TS is not very smart.
const viewportListMemoized = pMemoize(viewportList);
/**
Capture screenshots of websites in various resolutions. A good way to make sure your websites are responsive. It's speedy and generates 100 screenshots from 10 different websites in just over a minute. It can also be used to render SVG images.
*/
export default class Pageres extends EventEmitter {
    #options;
    #stats = {}; // eslint-disable-line @typescript-eslint/consistent-type-assertions
    #items = [];
    #sizes = [];
    #urls = [];
    #_source = [];
    #_destination = '';
    constructor(options = {}) {
        super();
        // Prevent false-positive `MaxListenersExceededWarning` warnings
        this.setMaxListeners(Number.POSITIVE_INFINITY);
        this.#options = { ...options };
        this.#options.filename ??= '<%= url %>-<%= size %><%= crop %>';
        this.#options.format ??= 'png';
        this.#options.incrementalName ??= false;
        this.#options.launchOptions ??= {};
    }
    source(url, sizes, options) {
        if (url === undefined) {
            return this.#_source;
        }
        if (!(typeof url === 'string' && url.length > 0)) {
            throw new TypeError('URL required');
        }
        if (!(Array.isArray(sizes) && sizes.length > 0)) {
            throw new TypeError('Sizes required');
        }
        this.#_source.push({ url, sizes, options });
        return this;
    }
    destination(directory) {
        if (directory === undefined) {
            return this.#_destination;
        }
        if (!(typeof directory === 'string' && directory.length > 0)) {
            throw new TypeError('Directory required');
        }
        this.#_destination = directory;
        return this;
    }
    /**
    Run pageres.

    @returns List of screenshot data.

    @example
    ```
    import Pageres from 'pageres';

    await new Pageres({delay: 2})
        .source('https://sindresorhus.com', ['1280x1024'])
        .destination('screenshots')
        .run();
    ```
    */
    async run() {
        await Promise.all(this.source().map(async (source) => {
            const options = {
                ...this.#options,
                ...source.options,
            };
            const sizes = arrayUniq(source.sizes.filter(size => /^\d{2,4}x\d{2,4}$/i.test(size)));
            const keywords = arrayDiffer(source.sizes, sizes);
            this.#urls.push(source.url);
            if (sizes.length === 0 && keywords.includes('w3counter')) {
                return this.#resolution(source.url, options);
            }
            if (keywords.length > 0) {
                return this.#viewport({ url: source.url, sizes, keywords }, options);
            }
            const screenshots = await pMap(sizes, async (size) => {
                this.#sizes.push(size);
                return this.#create(source.url, size, options);
            }, { concurrency: cpuCount * 2 });
            this.#items.push(...screenshots);
            return undefined;
        }));
        this.#stats.urls = arrayUniq(this.#urls).length;
        this.#stats.sizes = arrayUniq(this.#sizes).length;
        this.#stats.screenshots = this.#items.length;
        if (!this.destination()) {
            return this.#items;
        }
        await this.#save(this.#items);
        return this.#items;
    }
    /**
    Print a success message to the console.

    @example
    ```
    import Pageres from 'pageres';

    const pageres = new Pageres({delay: 2})
        .source('https://sindresorhus.com', ['1280x1024', '1920x1080'])
        .destination('screenshots');

    await pageres.run();

    // prints: Generated 2 screenshots from 1 url and 2 sizes.
    pageres.successMessage();
    ```
    */
    successMessage() {
        const { screenshots, sizes, urls } = this.#stats;
        const words = {
            screenshots: plur('screenshot', screenshots),
            sizes: plur('size', sizes),
            urls: plur('url', urls),
        };
        console.log(`\n${logSymbols.success} Generated ${screenshots} ${words.screenshots} from ${urls} ${words.urls} and ${sizes} ${words.sizes}`);
    }
    async #resolution(url, options) {
        for (const item of await getResolutionsMemoized()) {
            this.#sizes.push(item.item);
            this.#items.push(await this.#create(url, item.item, options));
        }
    }
    async #viewport(viewport, options) {
        for (const item of await viewportListMemoized(viewport.keywords)) {
            this.#sizes.push(item.size);
            viewport.sizes.push(item.size);
        }
        for (const size of arrayUniq(viewport.sizes)) {
            this.#items.push(await this.#create(viewport.url, size, options));
        }
    }
    async #save(screenshots) {
        await Promise.all(screenshots.map(async (screenshot) => {
            await makeDirectory(this.destination());
            const destination = path.join(this.destination(), screenshot.filename);
            await fsPromises.writeFile(destination, screenshot);
        }));
    }
    async #create(url, size, options) {
        const basename = fs.existsSync(url) ? path.basename(url) : url;
        let hash = new URL(url, pathToFileURL(process.cwd())).hash ?? '';
        // Strip empty hash fragments: `#` `#/` `#!/`
        if (/^#!?\/?$/.test(hash)) {
            hash = '';
        }
        const [width, height] = size.split('x');
        const filenameTemplate = template(`${options.filename}.${options.format}`);
        const now = Date.now();
        let filename = filenameTemplate({
            crop: options.crop ? '-cropped' : '',
            date: formatDate(now, 'yyyy-MM-dd'),
            time: formatDate(now, 'HH-mm-ss'),
            size,
            width,
            height,
            url: `${filenamifyUrl(basename)}${filenamify(hash)}`,
        });
        if (options.incrementalName) {
            filename = await unusedFilename(filename);
        }
        const finalOptions = {
            width: Number(width),
            height: Number(height),
            delay: options.delay,
            timeout: options.timeout,
            fullPage: !options.crop,
            styles: options.css ? [options.css] : undefined,
            defaultBackground: !options.transparent,
            scripts: options.script ? [options.script] : undefined,
            cookies: options.cookies, // TODO: Support string cookies in capture-website
            element: options.selector,
            hideElements: options.hide,
            scaleFactor: options.scale ?? 1,
            type: options.format === 'jpg' ? 'jpeg' : 'png',
            userAgent: options.userAgent,
            headers: options.headers,
            darkMode: options.darkMode,
            launchOptions: options.launchOptions,
            beforeScreenshot: options.beforeScreenshot,
        };
        if (options.username && options.password) {
            finalOptions.authentication = {
                username: options.username,
                password: options.password,
            };
        }
        const screenshot = new Uint8Array(await captureWebsite.buffer(url, finalOptions));
        screenshot.filename = filename;
        return screenshot;
    }
}
