//
// GENERATED SOURCE - DO NOT EDIT
//
import { Router } from 'express';
import { asyncHandler } from '@kapeta/sdk-server';
import { ConfigProvider } from '@kapeta/sdk-config';
import { restAPIMiddleware, createRESTParameterParser } from '@kapeta/sdk-rest-route';
import { createTestRouteService } from '../../service/TestRouteService';
import {
    GetTestContentRequest,
    GetTestContentResponse,
    GetSecretContentRequest,
    GetSecretContentResponse,
} from './TestRoutes';
import { json } from 'body-parser';

/**
 * creates all routes for the Test API
 */
export const createTestRouter = async (configProvider: ConfigProvider) => {
    const router = Router();
    router.use(json());
    router.use(restAPIMiddleware);

    const service = await createTestRouteService(configProvider);

    // getTestContent: Verify the method is available
    if (!service.getTestContent) {
        throw new Error('REST resource service for "Test" is missing method: "getTestContent"');
    }

    console.log('Publishing REST method: GET /config/test');

    router.get(
        '/config/test',
        createRESTParameterParser<GetTestContentRequest, GetTestContentResponse>([]),
        asyncHandler(service.getTestContent.bind(service))
    );

    // getSecretContent: Verify the method is available
    if (!service.getSecretContent) {
        throw new Error('REST resource service for "Test" is missing method: "getSecretContent"');
    }

    console.log('Publishing REST method: GET /config/secret');

    router.get(
        '/config/secret',
        createRESTParameterParser<GetSecretContentRequest, GetSecretContentResponse>([]),
        asyncHandler(service.getSecretContent.bind(service))
    );

    return router;
};
