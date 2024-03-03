import { http, HttpResponse } from 'msw';

/**
 * HTTP: DELETE /api/rest/Java/kv/:key
 * Response type: void
 */
export const JavaKeyValue_deleteHandler = http.delete(
    '*/api/rest/Java/kv/:key',

    () => {
        return new HttpResponse(null, { status: 200 });
    }
);
