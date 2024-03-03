package generated

import (
	rest "github.com/kapetacom/samples/rabbitmq/go-producer/generated/rest_api"
	kapeta "github.com/kapetacom/sdk-go-config/providers"
	"github.com/kapetacom/sdk-go-rest-server/server"
)

func RegisterRouters(e *server.KapetaServer, cfg kapeta.ConfigProvider) error {
	var err error
	err = rest.CreateMainEventsRouter(e, cfg)
	if err != nil {
		return err
	}
	return nil
}
