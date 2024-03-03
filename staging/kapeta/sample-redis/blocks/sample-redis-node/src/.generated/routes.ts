import { Router } from 'express';
import { ConfigProvider } from '@kapeta/sdk-config';

import { createKeyValueRouter } from 'generated:rest/key-value-routes';

export const createRoutes = async (config: ConfigProvider): Promise<Router> => {
    const routes = Router();
    routes.use(await createKeyValueRouter(config));
    return routes;
};
