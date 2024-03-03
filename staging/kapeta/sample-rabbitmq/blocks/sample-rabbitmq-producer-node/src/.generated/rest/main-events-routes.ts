//
// GENERATED SOURCE - DO NOT EDIT
//
import { Router } from 'express';
import { asyncHandler } from '@kapeta/sdk-server';
import { ConfigProvider } from '@kapeta/sdk-config';
import { restAPIMiddleware, createRESTParameterParser } from '@kapeta/sdk-rest-route';
import { createMainEventsRouteService } from '../../service/MainEventsRouteService';
import { SubmitRequest, SubmitResponse } from './MainEventsRoutes';
import { json } from 'body-parser';

/**
 * creates all routes for the MainEvents API
 */
export const createMainEventsRouter = async (configProvider: ConfigProvider) => {
    const router = Router();
    router.use(json());
    router.use(restAPIMiddleware);

    const service = await createMainEventsRouteService(configProvider);

    // submit: Verify the method is available
    if (!service.submit) {
        throw new Error('REST resource service for "Events" is missing method: "submit"');
    }

    console.log('Publishing REST method: POST /events/submit');

    router.post(
        '/events/submit',
        createRESTParameterParser<SubmitRequest, SubmitResponse>([
            { name: 'event', transport: 'BODY', typeName: 'Event' },
        ]),
        asyncHandler(service.submit.bind(service))
    );

    return router;
};
