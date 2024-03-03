/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.sample.queue;

import com.kapeta.spring.rabbitmq.RabbitConnectionManager;
import com.kapeta.spring.rabbitmq.RabbitMQProvider;
import com.sample.dto.EventDTO;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EventsPublisherConfig {

    @Bean
    public static RabbitMQProvider<EventDTO> eventsProvider(
        RabbitConnectionManager rabbitConnectionManager
    ) {
        return new RabbitMQProvider<>(
            rabbitConnectionManager,
            "events",
            EventDTO.class
        );
    }
}
