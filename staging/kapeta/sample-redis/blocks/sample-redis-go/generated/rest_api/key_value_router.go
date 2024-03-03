//
// GENERATED SOURCE - DO NOT EDIT
//
package rest

import (
	"fmt"
	generated "github.com/kapetacom/samples/redis/go/generated/services"
	"github.com/kapetacom/samples/redis/go/pkg/services"
	providers "github.com/kapetacom/sdk-go-config/providers"
	"github.com/kapetacom/sdk-go-rest-server/request"
	"github.com/kapetacom/sdk-go-rest-server/server"
	"github.com/labstack/echo/v4"
)

func CreateKeyValueRouter(e *server.KapetaServer, cfg providers.ConfigProvider) error {
	routeHandler, err := services.NewKeyValueHandler(cfg)
	if err != nil {
		return err
	}

	// Done like this to ensure interface compliance
	func(serviceInterface generated.KeyValueInterface) {
		e.GET("/kv/:key", func(ctx echo.Context) error {
			var err error

			var key string
			if err = request.GetPathParams(ctx, "key", &key); err != nil {
				return ctx.String(400, fmt.Sprintf("bad request, unable to get path param key %v", err))
			}

			return serviceInterface.Get(ctx, key)
		})

		e.POST("/kv/:key", func(ctx echo.Context) error {
			var err error

			var key string
			if err = request.GetPathParams(ctx, "key", &key); err != nil {
				return ctx.String(400, fmt.Sprintf("bad request, unable to get path param key %v", err))
			}
			value := string{}
			if err = request.GetBody(ctx, &value); err != nil {
				return ctx.String(400, fmt.Sprintf("bad request, unable to unmarshal value %v", err))
			}
			return serviceInterface.Create(ctx, key, value)
		})

		e.DELETE("/kv/:key", func(ctx echo.Context) error {
			var err error

			var key string
			if err = request.GetPathParams(ctx, "key", &key); err != nil {
				return ctx.String(400, fmt.Sprintf("bad request, unable to get path param key %v", err))
			}

			return serviceInterface.Delete(ctx, key)
		})
	}(routeHandler)

	return nil
}
