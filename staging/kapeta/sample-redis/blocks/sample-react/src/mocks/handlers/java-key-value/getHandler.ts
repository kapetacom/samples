import { http, passthrough } from 'msw';

/**
 * HTTP: GET /api/rest/Java/kv/:key
 * Response type: string
 */
export const JavaKeyValue_getHandler = http.get(
    '*/api/rest/Java/kv/:key',

    () => {
        // TODO: Return a response of type string
        return passthrough();
    }
);
