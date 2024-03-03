//
// GENERATED SOURCE - DO NOT EDIT
//
import type { Request, Response } from 'express';
import { Event } from 'generated:entities/Event';

export type SubmitRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    void,
    void,
    Event,
    void,
    Locals
>;
export type SubmitResponse<Locals extends Record<string, any> = Record<string, any>> = Response<void, Locals>;

/**
 * Defines the types for methods and routes of the MainEvents API
 */
export interface MainEventsRoutes<Locals extends Record<string, any> = Record<string, any>> {
    /**
     *
     * HTTP: POST /events/submit
     */
    submit(req: SubmitRequest<Locals>, res: SubmitResponse<Locals>): void | Promise<void>;
}
