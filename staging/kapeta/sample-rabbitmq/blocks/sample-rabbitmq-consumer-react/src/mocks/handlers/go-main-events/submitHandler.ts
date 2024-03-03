import { http, HttpResponse } from 'msw';

/**
 * HTTP: POST /api/rest/goMain/events/submit
 * Response type: void
 */
export const GoMainEvents_submitHandler = http.post(
    '*/api/rest/goMain/events/submit',

    () => {
        return new HttpResponse(null, { status: 200 });
    }
);
