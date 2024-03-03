import { Router } from 'express';
import { ConfigProvider } from '@kapeta/sdk-config';

import { createNodeEventsRouter } from 'generated:rest/node-events-routes';

export const createRoutes = async (config: ConfigProvider): Promise<Router> => {
    const routes = Router();
    routes.use(await createNodeEventsRouter(config));
    return routes;
};
