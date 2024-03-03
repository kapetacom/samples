//
// GENERATED SOURCE - DO NOT EDIT
//
import { Router } from 'express';
import { asyncHandler } from '@kapeta/sdk-server';
import { ConfigProvider } from '@kapeta/sdk-config';
import { restAPIMiddleware, createRESTParameterParser } from '@kapeta/sdk-rest-route';
import { createNodeEventsRouteService } from '../../service/NodeEventsRouteService';
import { GetAllRequest, GetAllResponse } from './NodeEventsRoutes';
import { json } from 'body-parser';

/**
 * creates all routes for the NodeEvents API
 */
export const createNodeEventsRouter = async (configProvider: ConfigProvider) => {
    const router = Router();
    router.use(json());
    router.use(restAPIMiddleware);

    const service = await createNodeEventsRouteService(configProvider);

    // getAll: Verify the method is available
    if (!service.getAll) {
        throw new Error('REST resource service for "NodeEvents" is missing method: "getAll"');
    }

    console.log('Publishing REST method: GET /events');

    router.get(
        '/events',
        createRESTParameterParser<GetAllRequest, GetAllResponse>([]),
        asyncHandler(service.getAll.bind(service))
    );

    return router;
};
