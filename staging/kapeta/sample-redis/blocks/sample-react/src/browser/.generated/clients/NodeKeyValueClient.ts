//
// GENERATED SOURCE - DO NOT EDIT
//

import { useMemo } from 'react';
import { RestClient } from '@kapeta/sdk-web-rest-client';
import { RestClientRequest } from '@kapeta/sdk-rest';

export type ConfigureNodeKeyValueClient = (client: NodeKeyValueClient) => NodeKeyValueClient;

/**
 * Creates a new NodeKeyValueClient for React components.
 * The client is configured with the provided configuration function.
 *
 * It is wrapped in a useMemo hook to ensure that the client is only created once.
 */
export const useNodeKeyValueClient = (configure?: ConfigureNodeKeyValueClient): NodeKeyValueClient => {
    return useMemo(() => {
        const client = new NodeKeyValueClient();
        if (configure) {
            return configure(client);
        }
        return client;
    }, [configure]);
};

/**
 * A client for the NodeKeyValue API.
 * Use the useNodeKeyValueClient hook to create a client in React.
 *
 * Use the NodeKeyValueClient directly in other contexts.
 */
export class NodeKeyValueClient extends RestClient {
    constructor() {
        super('api/rest/Node');
    }

    /**
     * HTTP: GET /api/rest/node/kv/{key}
     */
    async get(key: string): Promise<string | null> {
        const result = await this.$execute<string>('GET', '/kv/{key}', [
            { name: 'key', value: key, transport: 'PATH', typeName: 'string' },
        ]);

        if (result === null) {
            return null;
        }
        return result as string;
    }

    /**
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /api/rest/node/kv/{key}
     */
    getRequest(key: string): RestClientRequest<string | null> {
        return this.$create<string>('GET', '/kv/{key}', [
            { name: 'key', value: key, transport: 'PATH', typeName: 'string' },
        ]);
    }

    /**
     * HTTP: POST /api/rest/node/kv/{key}
     */
    async create(key: string, value: string): Promise<void> {
        await this.$execute<void>('POST', '/kv/{key}', [
            { name: 'key', value: key, transport: 'PATH', typeName: 'string' },
            { name: 'value', value: value, transport: 'BODY', typeName: 'string' },
        ]);
    }

    /**
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /api/rest/node/kv/{key}
     */
    createRequest(key: string, value: string): RestClientRequest<void> {
        return this.$create<void>('POST', '/kv/{key}', [
            { name: 'key', value: key, transport: 'PATH', typeName: 'string' },
            { name: 'value', value: value, transport: 'BODY', typeName: 'string' },
        ]);
    }

    /**
     * HTTP: DELETE /api/rest/node/kv/{key}
     */
    async delete(key: string): Promise<void> {
        await this.$execute<void>('DELETE', '/kv/{key}', [
            { name: 'key', value: key, transport: 'PATH', typeName: 'string' },
        ]);
    }

    /**
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /api/rest/node/kv/{key}
     */
    deleteRequest(key: string): RestClientRequest<void> {
        return this.$create<void>('DELETE', '/kv/{key}', [
            { name: 'key', value: key, transport: 'PATH', typeName: 'string' },
        ]);
    }
}
