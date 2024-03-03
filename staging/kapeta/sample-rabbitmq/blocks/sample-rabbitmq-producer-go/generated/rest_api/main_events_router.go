//
// GENERATED SOURCE - DO NOT EDIT
//
package rest

import (
	"fmt"
	"github.com/kapetacom/samples/rabbitmq/go-producer/generated/entities"
	generated "github.com/kapetacom/samples/rabbitmq/go-producer/generated/services"
	"github.com/kapetacom/samples/rabbitmq/go-producer/pkg/services"
	providers "github.com/kapetacom/sdk-go-config/providers"
	"github.com/kapetacom/sdk-go-rest-server/request"
	"github.com/kapetacom/sdk-go-rest-server/server"
	"github.com/labstack/echo/v4"
)

func CreateMainEventsRouter(e *server.KapetaServer, cfg providers.ConfigProvider) error {
	routeHandler, err := services.NewMainEventsHandler(cfg)
	if err != nil {
		return err
	}

	// Done like this to ensure interface compliance
	func(serviceInterface generated.MainEventsInterface) {
		e.POST("/events/submit", func(ctx echo.Context) error {
			var err error

			event := &entities.Event{}
			if err = request.GetBody(ctx, &event); err != nil {
				return ctx.String(400, fmt.Sprintf("bad request, unable to unmarshal event %v", err))
			}
			return serviceInterface.Submit(ctx, event)
		})
	}(routeHandler)

	return nil
}
