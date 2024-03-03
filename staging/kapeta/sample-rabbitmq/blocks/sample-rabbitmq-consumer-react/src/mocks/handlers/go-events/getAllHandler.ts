import { http, passthrough } from 'msw';

/**
 * HTTP: GET /api/rest/goEvents/events
 * Response type: Event[]
 */
export const GoEvents_getAllHandler = http.get(
    '*/api/rest/goEvents/events',

    () => {
        // TODO: Return a response of type Event[]
        return passthrough();
    }
);
