//
// GENERATED SOURCE - DO NOT EDIT
//
import { Router } from 'express';
import { asyncHandler } from '@kapeta/sdk-server';
import { ConfigProvider } from '@kapeta/sdk-config';
import { restAPIMiddleware, createRESTParameterParser } from '@kapeta/sdk-rest-route';
import { createTestRouteService } from '../../service/TestRouteService';
import { GetNextRequest, GetNextResponse } from './TestRoutes';
import { json } from 'body-parser';

/**
 * creates all routes for the Test API
 */
export const createTestRouter = async (configProvider: ConfigProvider) => {
    const router = Router();
    router.use(json());
    router.use(restAPIMiddleware);

    const service = await createTestRouteService(configProvider);

    // getNext: Verify the method is available
    if (!service.getNext) {
        throw new Error('REST resource service for "Test" is missing method: "getNext"');
    }

    console.log('Publishing REST method: GET /increment');

    router.get(
        '/increment',
        createRESTParameterParser<GetNextRequest, GetNextResponse>([]),
        asyncHandler(service.getNext.bind(service))
    );

    return router;
};
