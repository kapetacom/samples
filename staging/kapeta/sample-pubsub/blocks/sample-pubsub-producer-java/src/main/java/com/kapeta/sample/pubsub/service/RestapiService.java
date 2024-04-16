package com.kapeta.sample.pubsub.service;

import java.util.*;

import com.kapeta.sample.pubsub.dto.MessageDTO;
import com.kapeta.spring.pubsub.KapetaPubSubPublisherTemplate;
import org.springframework.stereotype.Service;

@Service
public class RestapiService implements IRestapiService {

    private final KapetaPubSubPublisherTemplate<MessageDTO> messagesPublisherTemplate;

    public RestapiService(KapetaPubSubPublisherTemplate<MessageDTO> messagesPublisherTemplate) {
        this.messagesPublisherTemplate = messagesPublisherTemplate;
    }

    @Override
    public void send() {
        MessageDTO messageDTO = new MessageDTO();
        messageDTO.setContent("Hello World");
        messagesPublisherTemplate.publish(messageDTO);
    }
}
