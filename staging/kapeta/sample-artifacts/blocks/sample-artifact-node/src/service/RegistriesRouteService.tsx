import { ConfigProvider } from '@kapeta/sdk-config';
import { RegistriesRoutes } from 'generated:rest/RegistriesRoutes';
import {getDockerDetails} from "generated:repository/docker-repository";
import {getNpmDetails} from "generated:repository/npm-repository";
import {getMvnDetails} from "generated:repository/mvn-repository";

/**
 * Creates the RegistriesRouteService.
 *
 * Class is created inside the function to allow async initialization to happen. The class structure is optional
 * but just makes it easier to organize the code.
 *
 * @param configProvider The configuration provider to use.
 */
export const createRegistriesRouteService = async (configProvider: ConfigProvider): Promise<RegistriesRoutes> => {

    const docker = await getDockerDetails(configProvider)
    const npm = await getNpmDetails(configProvider)
    const maven = await getMvnDetails(configProvider)

    return {
        /**
         *
         * HTTP: GET /registries/docker/setup
         */
        getDockerSetup(req, res): void {
            if (!docker) {
                res.sendError('Docker details not found', 500);
                return;
            }

            res.send(JSON.stringify({
                auths: {
                    [docker.host]: {
                        auth: docker.credentials ? Buffer.from(docker.credentials.username + ":" + docker.credentials.password).toString("base64") : '',
                    }
                },
                credHelpers: {
                    [docker.host]: ""
                }
            }, null, 2));
            res.sendError('REST resource method not implemented: "getDockerSetup"', 501);
        },

        /**
         *
         * HTTP: GET /registries/npm/setup
         */
        getNPMSetup(req, res): void {
            if (!npm) {
                res.sendError('NPM details not found', 500);
                return;
            }
            const urlString  = npm.host + (npm.options?.path || '')
            res.send(`@SCOPE:registry=${urlString}
                //${urlString}:always-auth=true`
            )
        },

        /**
         *
         * HTTP: GET /registries/maven/setup
         */
        getMavenSetup(req, res): void {
            if (!maven) {
                res.sendError('Maven details not found', 500);
                return;
            }
            const urlString  = maven.host + (maven.options?.path || '')
            res.send(`
            <project>
              <distributionManagement>
                <repository>
                  <id>artifact-registry</id>
                  <url>artifactregistry://${urlString}</url>
                </repository>
              </distributionManagement>
            
              <repositories>
                <repository>
                  <id>artifact-registry</id>
                  <url>artifactregistry://${urlString}</url>
                  <releases>
                    <enabled>true</enabled>
                  </releases>
                  <snapshots>
                    <enabled>false</enabled>
                  </snapshots>
                </repository>
              </repositories>
            
              <build>
                <extensions>
                  <extension>
                    <groupId>com.google.cloud.artifactregistry</groupId>
                    <artifactId>artifactregistry-maven-wagon</artifactId>
                    <version>2.2.0</version>
                  </extension>
                </extensions>
              </build>
            </project>

            `)
        },
    };
};
