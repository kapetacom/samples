import { http, passthrough } from 'msw';

/**
 * HTTP: GET /api/rest/nodeEvents/events
 * Response type: Event[]
 */
export const NodeEvents_getAllHandler = http.get(
    '*/api/rest/nodeEvents/events',

    () => {
        // TODO: Return a response of type Event[]
        return passthrough();
    }
);
