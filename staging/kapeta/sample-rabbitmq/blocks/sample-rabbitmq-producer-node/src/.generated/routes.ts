import { Router } from 'express';
import { ConfigProvider } from '@kapeta/sdk-config';

export const createRoutes = async (config: ConfigProvider): Promise<Router> => {
    const routes = Router();
    return routes;
};
