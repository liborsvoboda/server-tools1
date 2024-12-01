import { type JSHandle } from '@playwright/test';
import { type Options as GlobbyOptions } from 'globby';
import { type editor, type IPosition } from 'monaco-editor';
import { type MonacoGlobals } from '../shared/types.js';
interface SerializedRelatedInformation extends Omit<editor.IRelatedInformation, 'resource'> {
    resource: string;
}
interface SerializedMarker extends Omit<editor.IMarker, 'code' | 'relatedInformation' | 'resource'> {
    code?: string | {
        value: string;
        target: string;
    };
    relatedInformation?: SerializedRelatedInformation[];
    resource: string;
}
interface MonacoEditorHelpers {
    /**
     * Create a Monaco editor model.
     *
     * @param value
     *   The value to set.
     * @param pathOrUri
     *   The path or uri of the model. If a path is given, it will be converted to a file uri.
     * @param open
     *   If set to true, the created model is opened in the editor.
     * @param language
     *   The model language. By default this is auto detected based on the uri.
     * @returns
     *   A Playwright handle for the model.
     */
    createModel: (value: string, pathOrUri?: URL | string, open?: boolean, language?: string) => Promise<JSHandle<editor.ITextModel>>;
    /**
     * Open a files from the file system in Monaco editor.
     *
     * @param patterns
     *   A glob pattern or array of glob patterns to open in the editor.
     * @param options
     *   Options to pass to globby. The `cwd` option is also used to determine the base path of the
     *   file.
     */
    open: (patterns: string[] | string, options?: Omit<GlobbyOptions, 'absolute' | 'markDirectories' | 'objectMode' | 'onlyFiles' | 'unique'>) => Promise<void>;
    /**
     * Open an existing model in the editor.
     *
     * @param uri
     *   The uri of the model to open.
     */
    setModel: (uri: string) => Promise<void>;
    /**
     * Set the position in the editor.
     *
     * @param position
     *   The position to set.
     */
    setPosition: (position: IPosition) => Promise<void>;
    /**
     * Trigger an editor action.
     *
     * @param handlerId
     *   The id of the action to trigger.
     * @param payload
     *   An additional payload to send with the action.
     * @returns
     *   The result of the action.
     */
    trigger: (handlerId: string, payload?: unknown) => Promise<unknown>;
    /**
     * Wait for marker data to be triggered for a resource.
     *
     * @param uri
     *   The resource uri to wait for markers for.
     * @param fn
     *   A function to evaluate to trigger marker data.
     * @returns
     *   Marker data for the uri.
     */
    waitForMarkers: (uri: string, fn: () => Promise<void>) => Promise<SerializedMarker[]>;
}
export type EditorHandle = JSHandle<MonacoGlobals> & MonacoEditorHelpers;
export interface PlaywrightMonacoFixtures {
    editor: EditorHandle;
}
/**
 * A Playwright test environment that’s configured with Monaco editor helpers.
 */
export declare const test: import("@playwright/test").TestType<import("@playwright/test").PlaywrightTestArgs & import("@playwright/test").PlaywrightTestOptions & PlaywrightMonacoFixtures, import("@playwright/test").PlaywrightWorkerArgs & import("@playwright/test").PlaywrightWorkerOptions>;
export {};
//# sourceMappingURL=test.d.ts.map