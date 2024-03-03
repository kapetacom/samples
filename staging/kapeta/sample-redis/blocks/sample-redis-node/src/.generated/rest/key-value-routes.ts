//
// GENERATED SOURCE - DO NOT EDIT
//
import { Router } from 'express';
import { asyncHandler } from '@kapeta/sdk-server';
import { ConfigProvider } from '@kapeta/sdk-config';
import { restAPIMiddleware, createRESTParameterParser } from '@kapeta/sdk-rest-route';
import { createKeyValueRouteService } from '../../service/KeyValueRouteService';
import {
    GetRequest,
    GetResponse,
    CreateRequest,
    CreateResponse,
    DeleteRequest,
    DeleteResponse,
} from './KeyValueRoutes';
import { json } from 'body-parser';

/**
 * creates all routes for the KeyValue API
 */
export const createKeyValueRouter = async (configProvider: ConfigProvider) => {
    const router = Router();
    router.use(json());
    router.use(restAPIMiddleware);

    const service = await createKeyValueRouteService(configProvider);

    // get: Verify the method is available
    if (!service.get) {
        throw new Error('REST resource service for "KeyValue" is missing method: "get"');
    }

    console.log('Publishing REST method: GET /kv/:key');

    router.get(
        '/kv/:key',
        createRESTParameterParser<GetRequest, GetResponse>([{ name: 'key', transport: 'PATH', typeName: 'string' }]),
        asyncHandler(service.get.bind(service))
    );

    // create: Verify the method is available
    if (!service.create) {
        throw new Error('REST resource service for "KeyValue" is missing method: "create"');
    }

    console.log('Publishing REST method: POST /kv/:key');

    router.post(
        '/kv/:key',
        createRESTParameterParser<CreateRequest, CreateResponse>([
            { name: 'key', transport: 'PATH', typeName: 'string' },
            { name: 'value', transport: 'BODY', typeName: 'string' },
        ]),
        asyncHandler(service.create.bind(service))
    );

    // delete: Verify the method is available
    if (!service.delete) {
        throw new Error('REST resource service for "KeyValue" is missing method: "delete"');
    }

    console.log('Publishing REST method: DELETE /kv/:key');

    router.delete(
        '/kv/:key',
        createRESTParameterParser<DeleteRequest, DeleteResponse>([
            { name: 'key', transport: 'PATH', typeName: 'string' },
        ]),
        asyncHandler(service.delete.bind(service))
    );

    return router;
};
