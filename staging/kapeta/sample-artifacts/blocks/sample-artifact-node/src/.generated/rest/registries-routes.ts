//
// GENERATED SOURCE - DO NOT EDIT
//
import { Router } from 'express';
import { asyncHandler } from '@kapeta/sdk-server';
import { ConfigProvider } from '@kapeta/sdk-config';
import { restAPIMiddleware, createRESTParameterParser } from '@kapeta/sdk-rest-route';
import { createRegistriesRouteService } from '../../service/RegistriesRouteService';
import {
    GetDockerSetupRequest,
    GetDockerSetupResponse,
    GetNPMSetupRequest,
    GetNPMSetupResponse,
    GetMavenSetupRequest,
    GetMavenSetupResponse,
} from './RegistriesRoutes';
import { json } from 'body-parser';

/**
 * creates all routes for the Registries API
 */
export const createRegistriesRouter = async (configProvider: ConfigProvider) => {
    const router = Router();
    router.use(json());
    router.use(restAPIMiddleware);

    const service = await createRegistriesRouteService(configProvider);

    // getDockerSetup: Verify the method is available
    if (!service.getDockerSetup) {
        throw new Error('REST resource service for "Registries" is missing method: "getDockerSetup"');
    }

    console.log('Publishing REST method: GET /registries/docker/setup');

    router.get(
        '/registries/docker/setup',
        createRESTParameterParser<GetDockerSetupRequest, GetDockerSetupResponse>([]),
        asyncHandler(service.getDockerSetup.bind(service))
    );

    // getNPMSetup: Verify the method is available
    if (!service.getNPMSetup) {
        throw new Error('REST resource service for "Registries" is missing method: "getNPMSetup"');
    }

    console.log('Publishing REST method: GET /registries/npm/setup');

    router.get(
        '/registries/npm/setup',
        createRESTParameterParser<GetNPMSetupRequest, GetNPMSetupResponse>([]),
        asyncHandler(service.getNPMSetup.bind(service))
    );

    // getMavenSetup: Verify the method is available
    if (!service.getMavenSetup) {
        throw new Error('REST resource service for "Registries" is missing method: "getMavenSetup"');
    }

    console.log('Publishing REST method: GET /registries/maven/setup');

    router.get(
        '/registries/maven/setup',
        createRESTParameterParser<GetMavenSetupRequest, GetMavenSetupResponse>([]),
        asyncHandler(service.getMavenSetup.bind(service))
    );

    return router;
};
