interface EntryPointRecord extends Record<string, string> {
    /**
     * The setup entry point.
     */
    setup: string;
}
export interface CreateServerOptions {
    /**
     * Substitute packages with an alternative.
     *
     * @see https://esbuild.github.io/api/#alias
     */
    alias?: Record<string, string>;
    /**
     * If specified, use this port. By default a free port will be used.
     */
    port?: number;
}
/**
 * Create an esbuild dev server for use with Playwright.
 *
 * @param entryPoints
 *   The path to the entry point(s) to load. If a string is provided, it’s loaded  as `/setup.js`.
 *   If an object is provided, each key is loaded and the `setup` key is required.
 * @param options
 *   Optional options.
 * @returns
 *   A web server that serves a Monaco editor instance.
 */
export declare function createServer(entryPoints: EntryPointRecord | string, options?: CreateServerOptions): Promise<string>;
export {};
//# sourceMappingURL=server.d.ts.map