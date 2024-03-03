package generated

import (
	rest "github.com/kapetacom/samples/redis/go/generated/rest_api"
	kapeta "github.com/kapetacom/sdk-go-config/providers"
	"github.com/kapetacom/sdk-go-rest-server/server"
)

func RegisterRouters(e *server.KapetaServer, cfg kapeta.ConfigProvider) error {
	var err error
	err = rest.CreateKeyValueRouter(e, cfg)
	if err != nil {
		return err
	}
	return nil
}
