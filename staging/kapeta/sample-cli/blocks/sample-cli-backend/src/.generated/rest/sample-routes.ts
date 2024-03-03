//
// GENERATED SOURCE - DO NOT EDIT
//
import { Router } from 'express';
import { asyncHandler } from '@kapeta/sdk-server';
import { ConfigProvider } from '@kapeta/sdk-config';
import { restAPIMiddleware, createRESTParameterParser } from '@kapeta/sdk-rest-route';
import { createSampleRouteService } from '../../service/SampleRouteService';
import { GetNextValueRequest, GetNextValueResponse } from './SampleRoutes';
import { json } from 'body-parser';

/**
 * creates all routes for the Sample API
 */
export const createSampleRouter = async (configProvider: ConfigProvider) => {
    const router = Router();
    router.use(json());
    router.use(restAPIMiddleware);

    const service = await createSampleRouteService(configProvider);

    // getNextValue: Verify the method is available
    if (!service.getNextValue) {
        throw new Error('REST resource service for "Sample" is missing method: "getNextValue"');
    }

    console.log('Publishing REST method: GET /increment');

    router.get(
        '/increment',
        createRESTParameterParser<GetNextValueRequest, GetNextValueResponse>([]),
        asyncHandler(service.getNextValue.bind(service))
    );

    return router;
};
