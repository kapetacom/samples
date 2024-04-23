import { Router } from 'express';
import { ConfigProvider } from '@kapeta/sdk-config';

import { createTestRouter } from 'generated:rest/test-routes';

export const createRoutes = async (config: ConfigProvider): Promise<Router> => {
    const routes = Router();
    routes.use(await createTestRouter(config));
    return routes;
};
