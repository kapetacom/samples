/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.sample.queue;

import com.kapeta.spring.rabbitmq.KapetaMessageListenerContainer;
import com.kapeta.spring.rabbitmq.RabbitConnectionManager;
import com.kapeta.spring.rabbitmq.RabbitMQConsumer;
import com.sample.dto.EventDTO;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EventsSubscriberConfig {

    public static class Consumer extends RabbitMQConsumer<EventDTO> {

        public Consumer(RabbitConnectionManager rabbitConnectionManager) {
            super(rabbitConnectionManager, "events", EventDTO.class);
        }
    }

    public static class Container
        extends KapetaMessageListenerContainer<EventDTO> {

        public Container(Consumer consumer, IEventsSubscriber listener) {
            super(consumer, listener);
        }
    }

    @Bean
    public static Consumer eventsConsumer(
        RabbitConnectionManager rabbitConnectionManager
    ) {
        return new Consumer(rabbitConnectionManager);
    }

    @Bean
    public static Container eventsContainer(
        Consumer consumer,
        IEventsSubscriber listener
    ) {
        return new Container(consumer, listener);
    }
}
