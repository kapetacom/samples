import { Router } from 'express';
import { ConfigProvider } from '@kapeta/sdk-config';

import { createMainEventsRouter } from 'generated:rest/main-events-routes';

export const createRoutes = async (config: ConfigProvider): Promise<Router> => {
    const routes = Router();
    routes.use(await createMainEventsRouter(config));
    return routes;
};
