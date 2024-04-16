package com.kapeta.sample.pubsub.pubsub;

import com.kapeta.sample.pubsub.dto.MessageDTO;
import org.springframework.stereotype.Service;

@Service
public class MessagesSubscriber implements IMessagesSubscriber {

    @Override
    public void onMessage(MessageDTO messageDTO) throws Exception {
        System.err.println("Message received content=[" + messageDTO.getContent() + "]");
    }
}
