//
// GENERATED SOURCE - DO NOT EDIT
//
import Config, { ConfigProvider } from '@kapeta/sdk-config';
import { RedisDB as $RedisDB, createRedisClient as $createRedisClient, RedisClient } from '@kapeta/sdk-redis';

/**
 * Create a Redis client for the redis database.
 */
export const createRedisClient = (config?: ConfigProvider): Promise<RedisClient> => {
    return $createRedisClient(config ?? Config.getProvider(), 'redis');
};

/**
 * Use this class to access the redis database.
 *
 * Recommended use is to call the ```createRedisClient``` function to create a client.
 */
export class RedisDB extends $RedisDB {
    constructor() {
        super('redis');
    }
}
