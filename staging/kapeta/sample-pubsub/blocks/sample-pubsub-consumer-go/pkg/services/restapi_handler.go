package services

import (
	providers "github.com/kapetacom/sdk-go-config/providers"
	"github.com/labstack/echo/v4"
)

type RestapiHandler struct {
}

func NewRestapiHandler(cfg providers.ConfigProvider) (*RestapiHandler, error) {
	return &RestapiHandler{}, nil
}

func (handler *RestapiHandler) Ping(ctx echo.Context) error {
	return ctx.JSON(200, nil)
}
