//
// GENERATED SOURCE - DO NOT EDIT
//
package rest

import (
	providers "github.com/kapetacom/sdk-go-config/providers"
	"github.com/kapetacom/sdk-go-rest-server/request"
	"github.com/kapetacom/sdk-go-rest-server/server"
	"github.com/labstack/echo/v4"
	generated "kapeta/sample-pubsub-producer-go/generated/services"
	"kapeta/sample-pubsub-producer-go/pkg/services"
	"net/http"
)

func CreateGorestapiRouter(e *server.KapetaServer, cfg providers.ConfigProvider) error {
	routeHandler, err := services.NewGorestapiHandler(cfg)
	if err != nil {
		return err
	}

	// Done like this to ensure interface compliance
	func(serviceInterface generated.GorestapiInterface) {
		e.GET("/send", func(ctx echo.Context) error {
			type RequestParameters struct {
			}
			params := &RequestParameters{}

			if err := request.GetRequestParameters(ctx.Request(), params); err != nil {
				return echo.NewHTTPError(http.StatusBadRequest, err.Error())
			}
			return serviceInterface.Send(ctx)
		})
	}(routeHandler)

	return nil

}
