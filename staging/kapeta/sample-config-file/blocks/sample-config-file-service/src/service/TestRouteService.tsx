import { ConfigProvider } from '@kapeta/sdk-config';
import { TestRoutes } from 'generated:rest/TestRoutes';
import {getSomeConfig} from "generated:config/SomeConfig";
import * as FS from "node:fs/promises";

/**
 * Creates the TestRouteService.
 *
 * Class is created inside the function to allow async initialization to happen. The class structure is optional
 * but just makes it easier to organize the code.
 *
 * @param configProvider The configuration provider to use.
 */
export const createTestRouteService = async (configProvider: ConfigProvider): Promise<TestRoutes> => {
    const someConfig = getSomeConfig({
        test: 'value not found',
        secretTest: 'secret not found',
    });

    return {
        /**
         *
         * HTTP: GET /config/test
         */
        async getTestContent(req, res) {
            try {
                const content = await FS.readFile(someConfig.test)
                res.setHeader('Content-Type', 'text/plain')
                res.write(content);
            } catch (e) {
                res.statusCode = 404;
                res.write('Test not found');
            }
            res.end();
        },

        /**
         *
         * HTTP: GET /config/secret
         */
        async getSecretContent(req, res) {
            try {
                const content = await FS.readFile(someConfig.secretTest)
                res.setHeader('Content-Type', 'text/plain')
                res.write(content);
            } catch (e) {
                res.statusCode = 404;
                res.write('Secret not found');
            }
            res.end();
        },
    };
};
