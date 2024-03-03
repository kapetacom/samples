//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestClient } from '@kapeta/sdk-rest-client';
import { RestClientRequest } from '@kapeta/sdk-rest';
import { ConfigProvider } from '@kapeta/sdk-config';
import { Event } from '../../../.generated/entities/Event';

/**
 * Creates a new ready NodeMainEventsClient.
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
export async function createNodeMainEventsClient(configProvider: ConfigProvider): Promise<NodeMainEventsClient> {
    return new NodeMainEventsClient(false).$withConfigProvider(configProvider);
}

/**
 * A client for the NodeMainEvents API.
 *
 * Note that this client is not ready to use until it is configured with a ```ConfigProvider```.
 * This happens automatically when using the ```createNodeMainEventsClient``` function or
 * setting ```autoInit``` to true (the default).
 *
 * If you want to configure the client manually, set autoInit to false and call ```$withConfigProvider```.
 *
 * Recommended method is using ```createNodeMainEventsClient(configProvider:ConfigProvider)```;
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
export class NodeMainEventsClient extends RestClient {
    constructor(autoInit: boolean = true) {
        super('nodeMain', autoInit);
    }

    /**
     *
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /events/submit
     */
    async submit(event: Event): Promise<void> {
        await this.$execute('POST', '/events/submit', [
            { name: 'event', value: event, transport: 'BODY', typeName: 'Event' },
        ]);
    }

    /**
     *
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: POST /events/submit
     */
    submitRequest(event: Event): RestClientRequest<void> {
        return this.$create('POST', '/events/submit', [
            { name: 'event', value: event, transport: 'BODY', typeName: 'Event' },
        ]);
    }
}
