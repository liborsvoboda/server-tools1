import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test as base } from '@playwright/test';
import { globby } from 'globby';
/**
 * A Playwright test environment that’s configured with Monaco editor helpers.
 */
export const test = base.extend({
    async editor({ page }, use) {
        await page.goto('/');
        const handle = await page.evaluateHandle(() => window);
        const helpers = {
            createModel(value, pathOrUri, open, language) {
                let path;
                if (pathOrUri) {
                    if (pathOrUri instanceof URL) {
                        path = String(pathOrUri);
                    }
                    else {
                        try {
                            // TODO [engine:node@>=24]: Use URL.canParse()
                            // eslint-disable-next-line no-new
                            new URL(pathOrUri);
                        }
                        catch {
                            path = `file://${pathOrUri}`;
                        }
                        if (!path) {
                            path = pathOrUri;
                        }
                    }
                }
                return handle.evaluateHandle(({ ed, monaco }, [val, p, lang, doOpen]) => {
                    /* c8 ignore start */
                    const model = monaco.editor.createModel(val, lang, p ? monaco.Uri.parse(p) : undefined);
                    if (doOpen) {
                        ed.setModel(model);
                    }
                    return model;
                }, 
                /* c8 ignore stop */
                [value, path, language, open]);
            },
            async open(patterns, options = {}) {
                const paths = await globby(patterns, {
                    ...options,
                    absolute: false,
                    objectMode: false,
                    onlyFiles: true,
                    unique: true
                });
                const { cwd } = options;
                const basedir = cwd ? (typeof cwd === 'string' ? cwd : fileURLToPath(cwd)) : process.cwd();
                const values = await Promise.all(paths.map(async (path) => {
                    const absolutePath = join(basedir, path);
                    return [path.replaceAll('\\', '/'), await readFile(absolutePath, 'utf8')];
                }));
                return handle.evaluate(({ monaco }, entries) => {
                    /* c8 ignore start */
                    const root = monaco.Uri.parse('file:///');
                    for (const [path, value] of entries) {
                        monaco.editor.createModel(value, undefined, monaco.Uri.joinPath(root, path));
                    }
                    /* c8 ignore stop */
                }, values);
            },
            setModel: (uri) => handle.evaluate(({ ed, monaco }, uriString) => {
                /* c8 ignore next */
                ed.setModel(monaco.editor.getModel(monaco.Uri.parse(uriString)));
            }, uri),
            setPosition: (position) => handle.evaluate(({ ed }, pos) => {
                /* c8 ignore next */
                ed.setPosition(pos, 'monaco-playwright');
            }, position),
            trigger: (...args) => handle.evaluate(({ ed }, [handlerId, payload]) => {
                /* c8 ignore next */
                ed.trigger('monaco-playwright', handlerId, payload);
            }, args),
            async waitForMarkers(uri, fn) {
                const markerPromise = handle.evaluate(({ monaco }, uriString) => {
                    /* c8 ignore start */
                    const serializeMarker = ({ code, relatedInformation, resource, ...marker }) => {
                        const serializedMarker = {
                            ...marker,
                            resource: String(resource)
                        };
                        if (code != null) {
                            serializedMarker.code =
                                typeof code === 'string' ? code : { ...code, target: String(code) };
                        }
                        if (relatedInformation != null) {
                            serializedMarker.relatedInformation = relatedInformation.map((info) => ({
                                ...info,
                                resource: String(info.resource)
                            }));
                        }
                        return serializedMarker;
                    };
                    return new Promise((resolve) => {
                        const disposable = monaco.editor.onDidChangeMarkers((resources) => {
                            for (const resource of resources) {
                                if (String(resource) === uriString) {
                                    disposable.dispose();
                                    const markers = monaco.editor.getModelMarkers({ resource });
                                    resolve(markers.map(serializeMarker));
                                }
                            }
                        });
                    });
                    /* c8 ignore stop */
                }, uri);
                await fn();
                return markerPromise;
            }
        };
        await use(Object.assign(handle, helpers));
        await handle.dispose();
    }
});
//# sourceMappingURL=test.js.map