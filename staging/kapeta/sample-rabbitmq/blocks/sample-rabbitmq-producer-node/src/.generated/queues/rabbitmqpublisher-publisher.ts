//
// GENERATED SOURCE - DO NOT EDIT
//

import { ConfigProvider } from '@kapeta/sdk-config';
import { PublisherOptions, createPublisher } from '@kapeta/sdk-rabbitmq';
import { Event } from 'generated:entities/Event';

export enum RabbitmqpublisherRoutingKey {}

export interface RabbitmqpublisherHeaders {}

export const createRabbitmqpublisherPublisher = async (config: ConfigProvider, options?: PublisherOptions) => {
    return await createPublisher<Event, RabbitmqpublisherHeaders, RabbitmqpublisherRoutingKey>(
        config,
        'rabbitmqpublisher',
        options
    );
};
