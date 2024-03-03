//
// GENERATED SOURCE - DO NOT EDIT
//

import { useMemo } from 'react';
import { RestClient } from '@kapeta/sdk-web-rest-client';
import { RestClientRequest } from '@kapeta/sdk-rest';
import { Event } from '../../../.generated/entities/Event';

export type ConfigureNodeEventsClient = (client: NodeEventsClient) => NodeEventsClient;

/**
 * Creates a new NodeEventsClient for React components.
 * The client is configured with the provided configuration function.
 *
 * It is wrapped in a useMemo hook to ensure that the client is only created once.
 */
export const useNodeEventsClient = (configure?: ConfigureNodeEventsClient): NodeEventsClient => {
    return useMemo(() => {
        const client = new NodeEventsClient();
        if (configure) {
            return configure(client);
        }
        return client;
    }, [configure]);
};

/**
 * A client for the NodeEvents API.
 * Use the useNodeEventsClient hook to create a client in React.
 *
 * Use the NodeEventsClient directly in other contexts.
 */
export class NodeEventsClient extends RestClient {
    constructor() {
        super('api/rest/nodeEvents');
    }

    /**
     * HTTP: GET /api/rest/nodeevents/events
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
     * HTTP: GET /api/rest/nodeevents/events
     */
    getAllRequest(): RestClientRequest<Event[] | null> {
        return this.$create<Event[]>('GET', '/events', []);
    }
}
