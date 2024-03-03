import { http, passthrough } from 'msw';

/**
 * HTTP: GET /api/rest/test/increment
 * Response type: Result
 */
export const Test_getNextHandler = http.get(
    '*/api/rest/test/increment',

    () => {
        // TODO: Return a response of type Result
        return passthrough();
    }
);
