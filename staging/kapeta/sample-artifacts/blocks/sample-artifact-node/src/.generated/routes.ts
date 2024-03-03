import { Router } from 'express';
import { ConfigProvider } from '@kapeta/sdk-config';

import { createRegistriesRouter } from 'generated:rest/registries-routes';

export const createRoutes = async (config: ConfigProvider): Promise<Router> => {
    const routes = Router();
    routes.use(await createRegistriesRouter(config));
    return routes;
};
