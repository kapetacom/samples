// GENERATED SOURCE - DO NOT EDIT
//
package services

import (
	"github.com/labstack/echo/v4"
)

// KeyValueInterface is an interface for KeyValueHandler
// It is used to define the methods that are implemented in the KeyValueHandler
type KeyValueInterface interface {
	Get(ctx echo.Context, key string) error

	Create(ctx echo.Context, key string, value string) error

	Delete(ctx echo.Context, key string) error
}
