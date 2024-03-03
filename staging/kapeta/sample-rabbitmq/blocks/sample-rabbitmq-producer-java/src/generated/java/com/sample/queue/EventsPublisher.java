/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.sample.queue;

import com.kapeta.spring.rabbitmq.RabbitMQProvider;
import com.kapeta.spring.rabbitmq.RabbitPublisher;
import com.sample.dto.EventDTO;
import org.springframework.stereotype.Component;

@Component
public class EventsPublisher extends RabbitPublisher<EventDTO> {

    public EventsPublisher(RabbitMQProvider<EventDTO> eventsProvider) {
        super(
            eventsProvider.getTemplate(),
            eventsProvider.getTargetedExchangeNames()
        );
    }
}
