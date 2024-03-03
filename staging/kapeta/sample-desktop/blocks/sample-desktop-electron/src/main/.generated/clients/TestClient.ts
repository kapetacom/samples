//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestClient } from '@kapeta/sdk-rest-client';
import { RestClientRequest } from '@kapeta/sdk-rest';
import { ConfigProvider } from '@kapeta/sdk-config';
import { Result } from '../../../.generated/entities/Result';

/**
 * Creates a new ready TestClient.
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
export async function createTestClient(configProvider: ConfigProvider): Promise<TestClient> {
    return new TestClient(false).$withConfigProvider(configProvider);
}

/**
 * A client for the Test API.
 *
 * Note that this client is not ready to use until it is configured with a ```ConfigProvider```.
 * This happens automatically when using the ```createTestClient``` function or
 * setting ```autoInit``` to true (the default).
 *
 * If you want to configure the client manually, set autoInit to false and call ```$withConfigProvider```.
 *
 * Recommended method is using ```createTestClient(configProvider:ConfigProvider)```;
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
export class TestClient extends RestClient {
    constructor(autoInit: boolean = true) {
        super('test', autoInit);
    }

    /**
     *
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /increment
     */
    async getNext(): Promise<Result | null> {
        const result = await this.$execute('GET', '/increment', []);

        if (result === null) {
            return null;
        }
        return result as Result;
    }

    /**
     *
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: GET /increment
     */
    getNextRequest(): RestClientRequest<Result | null> {
        return this.$create('GET', '/increment', []);
    }
}
