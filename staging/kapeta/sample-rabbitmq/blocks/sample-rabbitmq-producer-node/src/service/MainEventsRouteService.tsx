import { ConfigProvider } from '@kapeta/sdk-config';
import { MainEventsRoutes } from 'generated:rest/MainEventsRoutes';

/**
 * Creates the MainEventsRouteService.
 *
 * Class is created inside the function to allow async initialization to happen. The class structure is optional
 * but just makes it easier to organize the code.
 *
 * @param configProvider The configuration provider to use.
 */
export const createMainEventsRouteService = async (configProvider: ConfigProvider): Promise<MainEventsRoutes> => {
    return {
        /**
         *
         * HTTP: POST /events/submit
         */
        submit(req, res): void {
            res.sendError('REST resource method not implemented: "submit"', 501);
        },
    };
};
