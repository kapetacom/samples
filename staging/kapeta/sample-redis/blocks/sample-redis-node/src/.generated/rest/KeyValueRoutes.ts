//
// GENERATED SOURCE - DO NOT EDIT
//
import type { Request, Response } from 'express';

export type GetRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    { key: string },
    string,
    void,
    void,
    Locals
>;
export type GetResponse<Locals extends Record<string, any> = Record<string, any>> = Response<string, Locals>;

export type CreateRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    { key: string },
    void,
    string,
    void,
    Locals
>;
export type CreateResponse<Locals extends Record<string, any> = Record<string, any>> = Response<void, Locals>;

export type DeleteRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    { key: string },
    void,
    void,
    void,
    Locals
>;
export type DeleteResponse<Locals extends Record<string, any> = Record<string, any>> = Response<void, Locals>;

/**
 * Defines the types for methods and routes of the KeyValue API
 */
export interface KeyValueRoutes<Locals extends Record<string, any> = Record<string, any>> {
    /**
     *
     * HTTP: GET /kv/:key
     */
    get(req: GetRequest<Locals>, res: GetResponse<Locals>): void | Promise<void>;

    /**
     *
     * HTTP: POST /kv/:key
     */
    create(req: CreateRequest<Locals>, res: CreateResponse<Locals>): void | Promise<void>;

    /**
     *
     * HTTP: DELETE /kv/:key
     */
    delete(req: DeleteRequest<Locals>, res: DeleteResponse<Locals>): void | Promise<void>;
}
