import { Router, Request, Response, NextFunction } from 'express';
import { ConfigProvider } from '@kapeta/sdk-config';
import { ProxyRouteOptions } from '@kapeta/sdk-proxy-route';
/*
This file contains routes generated by Kapeta. Do not edit this file manually.

To use this file, you need to add the following to your express server - usually in src/server/index.ts:

```typescript
import { createRoutes } from './routes';

const BASE_DIR = Path.resolve(__dirname, "../../dist");
runApp(async (configProvider:ConfigProvider) => {
    const server = await createServer(configProvider);

    // Use the generated routes
    server.use(await createRoutes(configProvider));

    const webpackConfig = require("../../webpack.development.config");
    server.configureAssets(BASE_DIR, webpackConfig);

    server.start("web");
}, Path.resolve(__dirname,'../../'));

```

The above is the default behaviour and if you haven't changed that you shouldn't need to do anything.

*/

import { createJavaRouter } from './proxies/rest/Java-routes';

import { createNodeRouter } from './proxies/rest/Node-routes';

export const createRoutes = async (config: ConfigProvider, opts: ProxyRouteOptions = {}): Promise<Router> => {
    const routes = Router();
    const restApis = Router();
    restApis.use(await createJavaRouter(config, opts));

    restApis.use(await createNodeRouter(config, opts));

    // Catch all unknown routes and return 418 I'm a teapot
    restApis.all('/*', (req: Request, res: Response, next: NextFunction) => {
        res.status(418).json({
            error: 'API endpoint not found',
        });
    });

    routes.use('/api/rest', restApis);

    return routes;
};