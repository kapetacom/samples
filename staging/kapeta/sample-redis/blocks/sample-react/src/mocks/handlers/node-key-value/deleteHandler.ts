import { http, HttpResponse } from 'msw';

/**
 * HTTP: DELETE /api/rest/Node/kv/:key
 * Response type: void
 */
export const NodeKeyValue_deleteHandler = http.delete(
    '*/api/rest/Node/kv/:key',

    () => {
        return new HttpResponse(null, { status: 200 });
    }
);
