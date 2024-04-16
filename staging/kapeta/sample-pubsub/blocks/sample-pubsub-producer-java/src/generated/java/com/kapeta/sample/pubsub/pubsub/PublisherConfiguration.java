/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.kapeta.sample.pubsub.pubsub;

import com.google.cloud.spring.pubsub.core.publisher.PubSubPublisherTemplate;
import com.kapeta.sample.pubsub.dto.*;
import com.kapeta.spring.config.providers.KapetaConfigurationProvider;
import com.kapeta.spring.pubsub.KapetaPubSubPublisherTemplate;
import java.io.IOException;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PublisherConfiguration {

    @Bean("messagesPublisherTemplate")
    public KapetaPubSubPublisherTemplate<MessageDTO> messagesPublisherTemplate(
        PubSubPublisherTemplate publisherTemplate,
        KapetaConfigurationProvider kapetaConfigurationProvider
    ) throws IOException {
        return new KapetaPubSubPublisherTemplate<>(
            publisherTemplate,
            kapetaConfigurationProvider,
            "messages"
        );
    }
}
