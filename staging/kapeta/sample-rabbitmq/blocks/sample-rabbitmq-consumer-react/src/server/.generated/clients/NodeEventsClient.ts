//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestClient } from '@kapeta/sdk-rest-client';
import { RestClientRequest } from '@kapeta/sdk-rest';
import { ConfigProvider } from '@kapeta/sdk-config';
import { Event } from '../../../.generated/entities/Event';

/**
 * Creates a new ready NodeEventsClient.
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
export async function createNodeEventsClient(configProvider: ConfigProvider): Promise<NodeEventsClient> {
    return new NodeEventsClient(false).$withConfigProvider(configProvider);
}

/**
 * A client for the NodeEvents API.
 *
 * Note that this client is not ready to use until it is configured with a ```ConfigProvider```.
 * This happens automatically when using the ```createNodeEventsClient``` function or
 * setting ```autoInit``` to true (the default).
 *
 * If you want to configure the client manually, set autoInit to false and call ```$withConfigProvider```.
 *
 * Recommended method is using ```createNodeEventsClient(configProvider:ConfigProvider)```;
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
export class NodeEventsClient extends RestClient {
    constructor(autoInit: boolean = true) {
        super('nodeEvents', autoInit);
    }

    /**
     *
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /events
     */
    async getAll(): Promise<Event[] | null> {
        const result = await this.$execute('GET', '/events', []);

        if (result === null) {
            return null;
        }
        return result as Event[];
    }

    /**
     *
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: GET /events
     */
    getAllRequest(): RestClientRequest<Event[] | null> {
        return this.$create('GET', '/events', []);
    }
}
