package generated

import (
	rest "github.com/kapetacom/samples/rabbitmq/go-consumer/generated/rest_api"
	kapeta "github.com/kapetacom/sdk-go-config/providers"
	"github.com/kapetacom/sdk-go-rest-server/server"
)

func RegisterRouters(e *server.KapetaServer, cfg kapeta.ConfigProvider) error {
	if err := rest.CreateGoEventsRouter(e, cfg); err != nil {
		return err
	}
	return nil
}
