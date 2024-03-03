import { ConfigProvider } from '@kapeta/sdk-config';
import { KeyValueRoutes } from 'generated:rest/KeyValueRoutes';

/**
 * Creates the KeyValueRouteService.
 *
 * Class is created inside the function to allow async initialization to happen. The class structure is optional
 * but just makes it easier to organize the code.
 *
 * @param configProvider The configuration provider to use.
 */
export const createKeyValueRouteService = async (configProvider: ConfigProvider): Promise<KeyValueRoutes> => {
    return {
        /**
         *
         * HTTP: GET /kv/:key
         */
        get(req, res): void {
            res.sendError('REST resource method not implemented: "get"', 501);
        },

        /**
         *
         * HTTP: POST /kv/:key
         */
        create(req, res): void {
            res.sendError('REST resource method not implemented: "create"', 501);
        },

        /**
         *
         * HTTP: DELETE /kv/:key
         */
        delete(req, res): void {
            res.sendError('REST resource method not implemented: "delete"', 501);
        },
    };
};
