package queues

import (
	"github.com/kapetacom/samples/rabbitmq/go-producer/generated/entities"
	"github.com/kapetacom/sdk-go-config/providers"
	"github.com/kapetacom/sdk-go-rabbitmq/rabbitmq"
)

type EventsPublisher = rabbitmq.Publisher[entities.Event, map[string]any, string]

type EventsPayload = rabbitmq.PublisherPayload[entities.Event, map[string]any, string]

func CreateEventsPublisher(config providers.ConfigProvider) (*EventsPublisher, error) {
	return rabbitmq.CreatePublisher[entities.Event, map[string]any, string](config, "events")
}
