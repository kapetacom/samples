import { ConfigProvider } from '@kapeta/sdk-config';
import { SampleRoutes } from 'generated:rest/SampleRoutes';

/**
 * Creates the SampleRouteService.
 *
 * Class is created inside the function to allow async initialization to happen. The class structure is optional
 * but just makes it easier to organize the code.
 *
 * @param configProvider The configuration provider to use.
 */
export const createSampleRouteService = async (configProvider: ConfigProvider): Promise<SampleRoutes> => {
    return {
        /**
         *
         * HTTP: GET /increment
         */
        getNextValue(req, res): void {
            res.sendError('REST resource method not implemented: "getNextValue"', 501);
        },
    };
};
