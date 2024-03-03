import { Router } from 'express';
import { ConfigProvider } from '@kapeta/sdk-config';

import { createSampleRouter } from 'generated:rest/sample-routes';

export const createRoutes = async (config: ConfigProvider): Promise<Router> => {
    const routes = Router();
    routes.use(await createSampleRouter(config));
    return routes;
};
