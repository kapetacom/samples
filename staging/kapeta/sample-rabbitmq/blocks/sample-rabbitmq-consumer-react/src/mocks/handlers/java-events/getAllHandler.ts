import { http, passthrough } from 'msw';

/**
 * HTTP: GET /api/rest/javaEvents/events
 * Response type: Event[]
 */
export const JavaEvents_getAllHandler = http.get(
    '*/api/rest/javaEvents/events',

    () => {
        // TODO: Return a response of type Event[]
        return passthrough();
    }
);
