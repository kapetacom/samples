// GENERATED SOURCE - DO NOT EDIT
//
package services

import (
	"github.com/kapetacom/samples/rabbitmq/go-producer/generated/entities"
	"github.com/labstack/echo/v4"
)

// MainEventsInterface is an interface for MainEventsHandler
// It is used to define the methods that are implemented in the MainEventsHandler
type MainEventsInterface interface {
	Submit(ctx echo.Context, event *entities.Event) error
}
