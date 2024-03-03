import { http, HttpResponse } from 'msw';

/**
 * HTTP: POST /api/rest/javaMain/events/submit
 * Response type: void
 */
export const JavaMainEvents_submitHandler = http.post(
    '*/api/rest/javaMain/events/submit',

    () => {
        return new HttpResponse(null, { status: 200 });
    }
);
