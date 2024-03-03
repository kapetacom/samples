import { http, HttpResponse } from 'msw';

/**
 * HTTP: POST /api/rest/nodeMain/events/submit
 * Response type: void
 */
export const NodeMainEvents_submitHandler = http.post(
    '*/api/rest/nodeMain/events/submit',

    () => {
        return new HttpResponse(null, { status: 200 });
    }
);
