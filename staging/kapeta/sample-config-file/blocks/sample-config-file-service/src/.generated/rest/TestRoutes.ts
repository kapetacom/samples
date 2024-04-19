//
// GENERATED SOURCE - DO NOT EDIT
//
import type { Request, Response } from 'express';

export type GetTestContentRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    void,
    string,
    void,
    void,
    Locals
>;
export type GetTestContentResponse<Locals extends Record<string, any> = Record<string, any>> = Response<string, Locals>;

export type GetSecretContentRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    void,
    string,
    void,
    void,
    Locals
>;
export type GetSecretContentResponse<Locals extends Record<string, any> = Record<string, any>> = Response<
    string,
    Locals
>;

/**
 * Defines the types for methods and routes of the Test API
 */
export interface TestRoutes<Locals extends Record<string, any> = Record<string, any>> {
    /**
     *
     * HTTP: GET /config/test
     */
    getTestContent(req: GetTestContentRequest<Locals>, res: GetTestContentResponse<Locals>): void | Promise<void>;

    /**
     *
     * HTTP: GET /config/secret
     */
    getSecretContent(req: GetSecretContentRequest<Locals>, res: GetSecretContentResponse<Locals>): void | Promise<void>;
}
