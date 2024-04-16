/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.kapeta.sample.pubsub.pubsub;

import com.kapeta.sample.pubsub.dto.*;
import com.kapeta.spring.config.providers.KapetaConfigurationProvider;
import com.kapeta.spring.pubsub.KapetaPubSubSubscriptionManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SubscriberConfiguration {

    @Bean
    public KapetaPubSubSubscriptionManager<
        MessageDTO
    > messagesSubscriptionManager(
        KapetaConfigurationProvider kapetaConfigurationProvider,
        IMessagesSubscriber subscriber
    ) {
        return new KapetaPubSubSubscriptionManager<>(
            kapetaConfigurationProvider,
            "messages",
            MessageDTO.class,
            subscriber::onMessage
        );
    }
}
