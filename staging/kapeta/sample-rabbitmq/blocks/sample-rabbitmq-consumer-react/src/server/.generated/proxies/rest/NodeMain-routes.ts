//
// GENERATED SOURCE - DO NOT EDIT
//
import { Router, Request, Response, NextFunction } from 'express';
import { createProxyRoute, ProxyRouteOptions } from '@kapeta/sdk-proxy-route';
import { ConfigProvider } from '@kapeta/sdk-config';

export const createNodeMainRouter = async (provider: ConfigProvider, opts: ProxyRouteOptions = {}) => {
    const router = Router();
    router.use('/nodeMain', await createProxyRoute(provider, 'nodeMain', 'rest', opts));

    return router;
};
