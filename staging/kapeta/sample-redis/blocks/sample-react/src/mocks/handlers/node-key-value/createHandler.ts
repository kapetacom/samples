import { http, HttpResponse } from 'msw';

/**
 * HTTP: POST /api/rest/Node/kv/:key
 * Response type: void
 */
export const NodeKeyValue_createHandler = http.post(
    '*/api/rest/Node/kv/:key',

    () => {
        return new HttpResponse(null, { status: 200 });
    }
);
