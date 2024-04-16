package generated

import (
	kapeta "github.com/kapetacom/sdk-go-config/providers"
	"github.com/kapetacom/sdk-go-rest-server/server"
	rest "kapeta/sample-pubsub-consumer-go/generated/rest_api"
)

func RegisterRouters(e *server.KapetaServer, cfg kapeta.ConfigProvider) error {
	if err := rest.CreateRestapiRouter(e, cfg); err != nil {
		return err
	}
	return nil
}
