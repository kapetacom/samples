// GENERATED SOURCE - DO NOT EDIT
package pubsub

import (
	"github.com/kapetacom/sdk-go-config/providers"
	"github.com/kapetacom/sdk-go-google-pubsub/pubsub"
	"kapeta/sample-pubsub-consumer-go/generated/entities"
	servicepubsub "kapeta/sample-pubsub-consumer-go/pkg/services/pubsub"
)

type CommandsConsumer = pubsub.Consumer[entities.Command]

type CommandsMessageHandler = pubsub.MessageHandler[entities.Command, map[string]string]

func CreateCommandsConsumer(config providers.ConfigProvider) (*CommandsConsumer, error) {
	consumer, err := servicepubsub.NewCommandsConsumer(config)
	if err != nil {
		return nil, err
	}
	return pubsub.CreateConsumer(config, "commands", consumer.OnMessage)
}
