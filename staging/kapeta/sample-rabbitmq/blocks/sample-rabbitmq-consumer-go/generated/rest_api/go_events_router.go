//
// GENERATED SOURCE - DO NOT EDIT
//
package rest

import (
	"fmt"
	generated "github.com/kapetacom/samples/rabbitmq/go-consumer/generated/services"
	"github.com/kapetacom/samples/rabbitmq/go-consumer/pkg/services"
	providers "github.com/kapetacom/sdk-go-config/providers"
	"github.com/kapetacom/sdk-go-rest-server/request"
	"github.com/kapetacom/sdk-go-rest-server/server"
	"github.com/labstack/echo/v4"
)

func CreateGoEventsRouter(e *server.KapetaServer, cfg providers.ConfigProvider) error {
	routeHandler, err := services.NewGoEventsHandler(cfg)
	if err != nil {
		return err
	}

	// Done like this to ensure interface compliance
	func(serviceInterface generated.GoEventsInterface) {
		e.GET("/events", func(ctx echo.Context) error {

			return serviceInterface.GetAll(ctx)
		})
	}(routeHandler)

	return nil
}
