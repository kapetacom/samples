//
// GENERATED SOURCE - DO NOT EDIT
//

import { useMemo } from 'react';
import { RestClient } from '@kapeta/sdk-web-rest-client';
import { RestClientRequest } from '@kapeta/sdk-rest';
import { Result } from '../../../.generated/entities/Result';

export type ConfigureTestClient = (client: TestClient) => TestClient;

/**
 * Creates a new TestClient for React components.
 * The client is configured with the provided configuration function.
 *
 * It is wrapped in a useMemo hook to ensure that the client is only created once.
 */
export const useTestClient = (configure?: ConfigureTestClient): TestClient => {
    return useMemo(() => {
        const client = new TestClient();
        if (configure) {
            return configure(client);
        }
        return client;
    }, [configure]);
};

/**
 * A client for the Test API.
 * Use the useTestClient hook to create a client in React.
 *
 * Use the TestClient directly in other contexts.
 */
export class TestClient extends RestClient {
    constructor() {
        // @ts-ignore
        if (!window.kapeta.hosts || !window.kapeta.hosts['test']) {
            throw new Error(`Resource not found: "test"`);
        }
        // @ts-ignore
        super(window.kapeta.hosts['test']);
    }

    /**
     * HTTP: GET /increment
     */
    async getNext(): Promise<Result | null> {
        const result = await this.$execute<Result>('GET', '/increment', []);

        if (result === null) {
            return null;
        }
        return result as Result;
    }

    /**
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /increment
     */
    getNextRequest(): RestClientRequest<Result | null> {
        return this.$create<Result>('GET', '/increment', []);
    }
}
