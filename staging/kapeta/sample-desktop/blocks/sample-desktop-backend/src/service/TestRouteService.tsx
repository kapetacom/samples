import { ConfigProvider } from '@kapeta/sdk-config';
import { TestRoutes } from 'generated:rest/TestRoutes';

/**
 * Creates the TestRouteService.
 *
 * Class is created inside the function to allow async initialization to happen. The class structure is optional
 * but just makes it easier to organize the code.
 *
 * @param configProvider The configuration provider to use.
 */
export const createTestRouteService = async (configProvider: ConfigProvider): Promise<TestRoutes> => {
    return {
        /**
         *
         * HTTP: GET /increment
         */
        getNext(req, res): void {
            res.sendError('REST resource method not implemented: "getNext"', 501);
        },
    };
};
