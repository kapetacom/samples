//
// GENERATED SOURCE - DO NOT EDIT
//
import type { Request, Response } from 'express';
import { Result } from 'generated:entities/Result';

export type GetNextValueRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    void,
    Result,
    void,
    void,
    Locals
>;
export type GetNextValueResponse<Locals extends Record<string, any> = Record<string, any>> = Response<Result, Locals>;

/**
 * Defines the types for methods and routes of the Sample API
 */
export interface SampleRoutes<Locals extends Record<string, any> = Record<string, any>> {
    /**
     *
     * HTTP: GET /increment
     */
    getNextValue(req: GetNextValueRequest<Locals>, res: GetNextValueResponse<Locals>): void | Promise<void>;
}
