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
    let value = 0;
    return {
        /**
         *
         * HTTP: GET /increment
         */
        getNextValue(req, res): void {
            res.send({
                next: value++,
            });
        },
    };
};
