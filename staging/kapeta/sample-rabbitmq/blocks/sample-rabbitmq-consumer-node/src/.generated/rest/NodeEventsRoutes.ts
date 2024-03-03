//
// GENERATED SOURCE - DO NOT EDIT
//
import type { Request, Response } from 'express';
import { Event } from 'generated:entities/Event';

export type GetAllRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    void,
    Event[],
    void,
    void,
    Locals
>;
export type GetAllResponse<Locals extends Record<string, any> = Record<string, any>> = Response<Event[], Locals>;

/**
 * Defines the types for methods and routes of the NodeEvents API
 */
export interface NodeEventsRoutes<Locals extends Record<string, any> = Record<string, any>> {
    /**
     *
     * HTTP: GET /events
     */
    getAll(req: GetAllRequest<Locals>, res: GetAllResponse<Locals>): void | Promise<void>;
}
