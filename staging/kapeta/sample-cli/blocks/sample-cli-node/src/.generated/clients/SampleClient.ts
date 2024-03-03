//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestClient } from '@kapeta/sdk-rest-client';
import { ConfigProvider } from '@kapeta/sdk-config';
import { RestClientRequest } from '@kapeta/sdk-rest';
import { Result } from 'generated:entities/Result';

/**
 * Creates a new ready SampleClient.
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
export async function createSampleClient(configProvider: ConfigProvider): Promise<SampleClient> {
    return new SampleClient(false).$withConfigProvider(configProvider);
}

/**
 * A client for the sample API.
 *
 * Note that this client is not ready to use until it is configured with a ```ConfigProvider```.
 * This happens automatically when using the ```createSampleClient``` function or
 * setting ```autoInit``` to true (the default).
 *
 * If you want to configure the client manually, set autoInit to false and call ```$withConfigProvider```.
 *
 * Recommended method is using ```createSampleClient(configProvider:ConfigProvider)```;
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
export class SampleClient extends RestClient {
    constructor(autoInit: boolean = true) {
        super('sample', autoInit);
    }

    /**
     *
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /increment
     */
    async getNextValue(): Promise<Result | null> {
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
    getNextValueRequest(): RestClientRequest<Result | null> {
        return this.$create('GET', '/increment', []);
    }
}
