//
// GENERATED SOURCE - DO NOT EDIT
//

import { useMemo } from 'react';
import { RestClient } from '@kapeta/sdk-web-rest-client';
import { RestClientRequest } from '@kapeta/sdk-rest';
import { Event } from '../../../.generated/entities/Event';

export type ConfigureNodeMainEventsClient = (client: NodeMainEventsClient) => NodeMainEventsClient;

/**
 * Creates a new NodeMainEventsClient for React components.
 * The client is configured with the provided configuration function.
 *
 * It is wrapped in a useMemo hook to ensure that the client is only created once.
 */
export const useNodeMainEventsClient = (configure?: ConfigureNodeMainEventsClient): NodeMainEventsClient => {
    return useMemo(() => {
        const client = new NodeMainEventsClient();
        if (configure) {
            return configure(client);
        }
        return client;
    }, [configure]);
};

/**
 * A client for the NodeMainEvents API.
 * Use the useNodeMainEventsClient hook to create a client in React.
 *
 * Use the NodeMainEventsClient directly in other contexts.
 */
export class NodeMainEventsClient extends RestClient {
    constructor() {
        super('api/rest/nodeMain');
    }

    /**
     * HTTP: POST /api/rest/nodemain/events/submit
     */
    async submit(event: Event): Promise<void> {
        await this.$execute<void>('POST', '/events/submit', [
            { name: 'event', value: event, transport: 'BODY', typeName: 'Event' },
        ]);
    }

    /**
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /api/rest/nodemain/events/submit
     */
    submitRequest(event: Event): RestClientRequest<void> {
        return this.$create<void>('POST', '/events/submit', [
            { name: 'event', value: event, transport: 'BODY', typeName: 'Event' },
        ]);
    }
}
