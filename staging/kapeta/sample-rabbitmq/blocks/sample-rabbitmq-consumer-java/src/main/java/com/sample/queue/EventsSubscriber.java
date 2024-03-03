package com.sample.queue;

import com.sample.dto.EventDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.Message;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class EventsSubscriber implements IEventsSubscriber {

    @Override
    public void onMessage(Message<EventDTO> message) {
        log.warn(
            "Received message from events using example handler: {}",
            message
        );
    }
}
