package pubsub

import (
	"fmt"
	"github.com/kapetacom/sdk-go-config/providers"
	"kapeta/sample-pubsub-consumer-go/generated/entities"
)

type CommandsConsumer struct{}

func NewCommandsConsumer(cfg providers.ConfigProvider) (*CommandsConsumer, error) {
	return &CommandsConsumer{}, nil
}

func (c *CommandsConsumer) OnMessage(message entities.Command, attributes map[string]string) error {
	err := fmt.Errorf("command received type=[%s]", message.Type)
	fmt.Println(err)
	return nil
}
