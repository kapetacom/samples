/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.sample.repositories.redis;

import com.kapeta.spring.redis.AbstractRedisConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;

@Configuration
@EnableRedisRepositories(basePackages = { "com.sample.repositories.redis" })
public class RedisConfig extends AbstractRedisConfig {

    public RedisConfig() {
        super("redis");
    }
}
