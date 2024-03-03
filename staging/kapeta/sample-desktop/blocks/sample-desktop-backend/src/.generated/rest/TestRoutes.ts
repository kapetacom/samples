//
// GENERATED SOURCE - DO NOT EDIT
//
import type { Request, Response } from 'express';

export type GetNextRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    void,
    number,
    void,
    void,
    Locals
>;
export type GetNextResponse<Locals extends Record<string, any> = Record<string, any>> = Response<number, Locals>;

/**
 * Defines the types for methods and routes of the Test API
 */
export interface TestRoutes<Locals extends Record<string, any> = Record<string, any>> {
    /**
     *
     * HTTP: GET /increment
     */
    getNext(req: GetNextRequest<Locals>, res: GetNextResponse<Locals>): void | Promise<void>;
}
