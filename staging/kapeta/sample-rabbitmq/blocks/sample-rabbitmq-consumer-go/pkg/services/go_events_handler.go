package services

import (
	"github.com/kapetacom/samples/rabbitmq/go-consumer/generated/entities"
	providers "github.com/kapetacom/sdk-go-config/providers"
	"github.com/labstack/echo/v4"
)

type GoEventsHandler struct {
}

func NewGoEventsHandler(cfg providers.ConfigProvider) (*GoEventsHandler, error) {
	return &GoEventsHandler{}, nil
}

func (handler *GoEventsHandler) GetAll(ctx echo.Context) error {
	return ctx.JSON(200, []entities.Event{})
}
