//
// GENERATED SOURCE - DO NOT EDIT
//

import { ConfigProvider } from '@kapeta/sdk-config';
import { createConsumer, MessageHandler, ConsumerOptions } from '@kapeta/sdk-rabbitmq';
import { Event } from 'generated:entities/Event';

export type EventsMessageHandler = MessageHandler<Event>;

export const addEventsSubscriber = async (
    config: ConfigProvider,
    consumer: EventsMessageHandler,
    options?: ConsumerOptions
) => {
    return await createConsumer<Event>(config, 'events', consumer, options);
};
