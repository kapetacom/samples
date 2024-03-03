package queues

import (
	"github.com/kapetacom/samples/rabbitmq/go-consumer/generated/entities"
	"github.com/kapetacom/sdk-go-config/providers"
	"github.com/kapetacom/sdk-go-rabbitmq/rabbitmq"
)

type EventsHandler = rabbitmq.MessageHandler[entities.Event]

func CreateEventsConsumer(config providers.ConfigProvider, handler EventsHandler) (*rabbitmq.Consumer, error) {
	return rabbitmq.CreateConsumer[entities.Event](config, "events", handler)
}
