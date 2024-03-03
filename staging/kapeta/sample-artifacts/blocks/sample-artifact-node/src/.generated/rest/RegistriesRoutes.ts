//
// GENERATED SOURCE - DO NOT EDIT
//
import type { Request, Response } from 'express';

export type GetDockerSetupRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    void,
    string,
    void,
    void,
    Locals
>;
export type GetDockerSetupResponse<Locals extends Record<string, any> = Record<string, any>> = Response<string, Locals>;

export type GetNPMSetupRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    void,
    string,
    void,
    void,
    Locals
>;
export type GetNPMSetupResponse<Locals extends Record<string, any> = Record<string, any>> = Response<string, Locals>;

export type GetMavenSetupRequest<Locals extends Record<string, any> = Record<string, any>> = Request<
    void,
    string,
    void,
    void,
    Locals
>;
export type GetMavenSetupResponse<Locals extends Record<string, any> = Record<string, any>> = Response<string, Locals>;

/**
 * Defines the types for methods and routes of the Registries API
 */
export interface RegistriesRoutes<Locals extends Record<string, any> = Record<string, any>> {
    /**
     *
     * HTTP: GET /registries/docker/setup
     */
    getDockerSetup(req: GetDockerSetupRequest<Locals>, res: GetDockerSetupResponse<Locals>): void | Promise<void>;

    /**
     *
     * HTTP: GET /registries/npm/setup
     */
    getNPMSetup(req: GetNPMSetupRequest<Locals>, res: GetNPMSetupResponse<Locals>): void | Promise<void>;

    /**
     *
     * HTTP: GET /registries/maven/setup
     */
    getMavenSetup(req: GetMavenSetupRequest<Locals>, res: GetMavenSetupResponse<Locals>): void | Promise<void>;
}
