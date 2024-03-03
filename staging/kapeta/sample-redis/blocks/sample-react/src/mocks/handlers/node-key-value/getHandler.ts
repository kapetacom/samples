import { http, passthrough } from 'msw';

/**
 * HTTP: GET /api/rest/Node/kv/:key
 * Response type: string
 */
export const NodeKeyValue_getHandler = http.get(
    '*/api/rest/Node/kv/:key',

    () => {
        // TODO: Return a response of type string
        return passthrough();
    }
);
