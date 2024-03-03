package services

import (
	"github.com/kapetacom/samples/rabbitmq/go-producer/generated/entities"
	providers "github.com/kapetacom/sdk-go-config/providers"
	"github.com/labstack/echo/v4"
)

type MainEventsHandler struct {
}

func NewMainEventsHandler(cfg providers.ConfigProvider) (*MainEventsHandler, error) {
	return &MainEventsHandler{}, nil
}

func (handler *MainEventsHandler) Submit(ctx echo.Context, event *entities.Event) error {
	return ctx.JSON(200, nil)
}
