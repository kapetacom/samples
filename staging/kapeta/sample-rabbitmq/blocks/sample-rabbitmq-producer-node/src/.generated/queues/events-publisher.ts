//
// GENERATED SOURCE - DO NOT EDIT
//

import { ConfigProvider } from '@kapeta/sdk-config';
import { PublisherOptions, createPublisher } from '@kapeta/sdk-rabbitmq';
import { Event } from 'generated:entities/Event';

export enum EventsRoutingKey {}

export interface EventsHeaders {}

export const createEventsPublisher = async (config: ConfigProvider, options?: PublisherOptions) => {
    return await createPublisher<Event, EventsHeaders, EventsRoutingKey>(config, 'events', options);
};
