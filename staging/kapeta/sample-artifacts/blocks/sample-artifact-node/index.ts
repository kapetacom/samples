import { ConfigProvider, runApp } from '@kapeta/sdk-config';
import { createServer } from './src/server';
import { createRoutes } from 'generated:routes';

// runApp is a helper function that will load the configuration from Kapeta and then run the provided function
runApp(async (configProvider: ConfigProvider) => {
    // Create the server - see src/server/server.ts for more information
    const server = createServer(configProvider);

    // Includes the generated routes for your API resources
    server.use(await createRoutes(configProvider));

    server.start('rest');
}, __dirname);
