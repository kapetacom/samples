package services

import (
	providers "github.com/kapetacom/sdk-go-config/providers"
	"github.com/labstack/echo/v4"
	"kapeta/sample-pubsub-producer-go/generated/entities"
	"kapeta/sample-pubsub-producer-go/generated/pubsub"
)

type GorestapiHandler struct {
	CommandPublisher *pubsub.CommandsPublisher
}

func NewGorestapiHandler(cfg providers.ConfigProvider) (*GorestapiHandler, error) {
	commandPublisher, err := pubsub.CreateCommandsPublisher(cfg)
	if err != nil {
		return nil, err
	}

	return &GorestapiHandler{CommandPublisher: commandPublisher}, nil
}

func (handler *GorestapiHandler) Send(ctx echo.Context) error {
	_, err := handler.CommandPublisher.Publish(pubsub.CommandsPayload{DataType: entities.Command{Type: "create customer"}})
	if err != nil {
		return err
	}
	return ctx.JSON(200, nil)
}
