import { http, HttpResponse } from 'msw';

/**
 * HTTP: POST /api/rest/Java/kv/:key
 * Response type: void
 */
export const JavaKeyValue_createHandler = http.post(
    '*/api/rest/Java/kv/:key',

    () => {
        return new HttpResponse(null, { status: 200 });
    }
);
