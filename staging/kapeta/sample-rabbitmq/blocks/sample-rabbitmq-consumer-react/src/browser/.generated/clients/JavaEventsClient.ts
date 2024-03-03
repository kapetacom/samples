//
// GENERATED SOURCE - DO NOT EDIT
//

import { useMemo } from 'react';
import { RestClient } from '@kapeta/sdk-web-rest-client';
import { RestClientRequest } from '@kapeta/sdk-rest';
import { Event } from '../../../.generated/entities/Event';

export type ConfigureJavaEventsClient = (client: JavaEventsClient) => JavaEventsClient;

/**
 * Creates a new JavaEventsClient for React components.
 * The client is configured with the provided configuration function.
 *
 * It is wrapped in a useMemo hook to ensure that the client is only created once.
 */
export const useJavaEventsClient = (configure?: ConfigureJavaEventsClient): JavaEventsClient => {
    return useMemo(() => {
        const client = new JavaEventsClient();
        if (configure) {
            return configure(client);
        }
        return client;
    }, [configure]);
};

/**
 * A client for the JavaEvents API.
 * Use the useJavaEventsClient hook to create a client in React.
 *
 * Use the JavaEventsClient directly in other contexts.
 */
export class JavaEventsClient extends RestClient {
    constructor() {
        super('api/rest/javaEvents');
    }

    /**
     * HTTP: GET /api/rest/javaevents/events
     */
    async getAll(): Promise<Event[] | null> {
        const result = await this.$execute<Event[]>('GET', '/events', []);

        if (result === null) {
            return null;
        }
        return result as Event[];
    }

    /**
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /api/rest/javaevents/events
     */
    getAllRequest(): RestClientRequest<Event[] | null> {
        return this.$create<Event[]>('GET', '/events', []);
    }
}
