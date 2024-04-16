// GENERATED SOURCE - DO NOT EDIT
package pubsub

import (
	"github.com/kapetacom/sdk-go-config/providers"
	"github.com/kapetacom/sdk-go-google-pubsub/pubsub"
	"kapeta/sample-pubsub-producer-go/generated/entities"
)

type CommandsPublisher = pubsub.Publisher[entities.Command, map[string]string]

type CommandsPayload = pubsub.PublisherPayload[entities.Command, map[string]string]

func CreateCommandsPublisher(config providers.ConfigProvider) (*CommandsPublisher, error) {
	return pubsub.CreatePublisher[entities.Command, map[string]string](config, "commands")
}
