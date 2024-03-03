"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleClient = exports.createSampleClient = void 0;
//
// GENERATED SOURCE - DO NOT EDIT
//
const sdk_rest_client_1 = require("@kapeta/sdk-rest-client");
/**
 * Creates a new ready SampleClient.
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
async function createSampleClient(configProvider) {
    return new SampleClient(false).$withConfigProvider(configProvider);
}
exports.createSampleClient = createSampleClient;
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
class SampleClient extends sdk_rest_client_1.RestClient {
    constructor(autoInit = true) {
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
    async getNextValue() {
        const result = await this.$execute('GET', '/increment', []);
        if (result === null) {
            return null;
        }
        return result;
    }
    /**
     *
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: GET /increment
     */
    getNextValueRequest() {
        return this.$create('GET', '/increment', []);
    }
}
exports.SampleClient = SampleClient;
//# sourceMappingURL=SampleClient.js.map