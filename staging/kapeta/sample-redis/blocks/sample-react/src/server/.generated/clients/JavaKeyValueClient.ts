//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestClient } from '@kapeta/sdk-rest-client';
import { RestClientRequest } from '@kapeta/sdk-rest';
import { ConfigProvider } from '@kapeta/sdk-config';

/**
 * Creates a new ready JavaKeyValueClient.
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
export async function createJavaKeyValueClient(configProvider: ConfigProvider): Promise<JavaKeyValueClient> {
    return new JavaKeyValueClient(false).$withConfigProvider(configProvider);
}

/**
 * A client for the JavaKeyValue API.
 *
 * Note that this client is not ready to use until it is configured with a ```ConfigProvider```.
 * This happens automatically when using the ```createJavaKeyValueClient``` function or
 * setting ```autoInit``` to true (the default).
 *
 * If you want to configure the client manually, set autoInit to false and call ```$withConfigProvider```.
 *
 * Recommended method is using ```createJavaKeyValueClient(configProvider:ConfigProvider)```;
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
export class JavaKeyValueClient extends RestClient {
    constructor(autoInit: boolean = true) {
        super('Java', autoInit);
    }

    /**
     *
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /kv/{key}
     */
    async get(key: string): Promise<string | null> {
        const result = await this.$execute('GET', '/kv/{key}', [
            { name: 'key', value: key, transport: 'PATH', typeName: 'string' },
        ]);

        if (result === null) {
            return null;
        }
        return result as string;
    }

    /**
     *
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: GET /kv/{key}
     */
    getRequest(key: string): RestClientRequest<string | null> {
        return this.$create('GET', '/kv/{key}', [{ name: 'key', value: key, transport: 'PATH', typeName: 'string' }]);
    }

    /**
     *
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /kv/{key}
     */
    async create(key: string, value: string): Promise<void> {
        await this.$execute('POST', '/kv/{key}', [
            { name: 'key', value: key, transport: 'PATH', typeName: 'string' },
            { name: 'value', value: value, transport: 'BODY', typeName: 'string' },
        ]);
    }

    /**
     *
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: POST /kv/{key}
     */
    createRequest(key: string, value: string): RestClientRequest<void> {
        return this.$create('POST', '/kv/{key}', [
            { name: 'key', value: key, transport: 'PATH', typeName: 'string' },
            { name: 'value', value: value, transport: 'BODY', typeName: 'string' },
        ]);
    }

    /**
     *
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /kv/{key}
     */
    async delete(key: string): Promise<void> {
        await this.$execute('DELETE', '/kv/{key}', [
            { name: 'key', value: key, transport: 'PATH', typeName: 'string' },
        ]);
    }

    /**
     *
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: DELETE /kv/{key}
     */
    deleteRequest(key: string): RestClientRequest<void> {
        return this.$create('DELETE', '/kv/{key}', [
            { name: 'key', value: key, transport: 'PATH', typeName: 'string' },
        ]);
    }
}
