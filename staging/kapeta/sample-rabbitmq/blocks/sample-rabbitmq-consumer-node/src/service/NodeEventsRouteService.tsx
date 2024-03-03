import { ConfigProvider } from '@kapeta/sdk-config';
import { NodeEventsRoutes } from 'generated:rest/NodeEventsRoutes';

/**
 * Creates the NodeEventsRouteService.
 *
 * Class is created inside the function to allow async initialization to happen. The class structure is optional
 * but just makes it easier to organize the code.
 *
 * @param configProvider The configuration provider to use.
 */
export const createNodeEventsRouteService = async (configProvider: ConfigProvider): Promise<NodeEventsRoutes> => {
    return {
        /**
         *
         * HTTP: GET /events
         */
        getAll(req, res): void {
            res.sendError('REST resource method not implemented: "getAll"', 501);
        },
    };
};
