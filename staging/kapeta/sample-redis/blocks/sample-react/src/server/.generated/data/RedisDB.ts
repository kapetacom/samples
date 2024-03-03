//
// GENERATED SOURCE - DO NOT EDIT
//
import Config, { ConfigProvider } from '@kapeta/sdk-config';
import {
    RedisDB as $RedisDB,
    createRedisClient as $createRedisClient,
    RedisClient,
    RedisOptions,
} from '@kapeta/sdk-redis';

export const createRedisClient = (options?: RedisOptions, config?: ConfigProvider): Promise<RedisClient> => {
    return $createRedisClient(config ?? Config.getProvider(), 'redis', options);
};

export class RedisDB extends $RedisDB {
    constructor(options?: RedisOptions) {
        super('redis', options);
    }
}
