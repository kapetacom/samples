//
// GENERATED SOURCE - DO NOT EDIT
//

import { useMemo } from 'react';
import { RestClient } from '@kapeta/sdk-web-rest-client';
import { RestClientRequest } from '@kapeta/sdk-rest';
import { Event } from '../../../.generated/entities/Event';

export type ConfigureGoMainEventsClient = (client: GoMainEventsClient) => GoMainEventsClient;

/**
 * Creates a new GoMainEventsClient for React components.
 * The client is configured with the provided configuration function.
 *
 * It is wrapped in a useMemo hook to ensure that the client is only created once.
 */
export const useGoMainEventsClient = (configure?: ConfigureGoMainEventsClient): GoMainEventsClient => {
    return useMemo(() => {
        const client = new GoMainEventsClient();
        if (configure) {
            return configure(client);
        }
        return client;
    }, [configure]);
};

/**
 * A client for the GoMainEvents API.
 * Use the useGoMainEventsClient hook to create a client in React.
 *
 * Use the GoMainEventsClient directly in other contexts.
 */
export class GoMainEventsClient extends RestClient {
    constructor() {
        super('api/rest/goMain');
    }

    /**
     * HTTP: POST /api/rest/gomain/events/submit
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
     * HTTP: POST /api/rest/gomain/events/submit
     */
    submitRequest(event: Event): RestClientRequest<void> {
        return this.$create<void>('POST', '/events/submit', [
            { name: 'event', value: event, transport: 'BODY', typeName: 'Event' },
        ]);
    }
}
