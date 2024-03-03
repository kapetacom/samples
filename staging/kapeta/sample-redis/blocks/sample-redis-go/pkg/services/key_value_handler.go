package services

import (
	providers "github.com/kapetacom/sdk-go-config/providers"
	"github.com/labstack/echo/v4"
)

type KeyValueHandler struct {
}

func NewKeyValueHandler(cfg providers.ConfigProvider) (*KeyValueHandler, error) {
	return &KeyValueHandler{}, nil
}

func (handler *KeyValueHandler) Get(ctx echo.Context, key string) error {
	return ctx.JSON(200, string)
}

func (handler *KeyValueHandler) Create(ctx echo.Context, key string, value string) error {
	return ctx.JSON(200, nil)
}

func (handler *KeyValueHandler) Delete(ctx echo.Context, key string) error {
	return ctx.JSON(200, nil)
}
