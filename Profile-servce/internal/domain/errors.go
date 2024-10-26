package domain

import "errors"

type SimpleErr struct {
	Message interface{} `json:"message,required"`
}

var (
	ErrInternalServerError = errors.New("internal server error")
	ErrUnknownError        = errors.New("unknown error")
	ErrResponseError       = errors.New("response generation error")
	ErrConfigParsingFailed = errors.New("config parsing failed")
)

func NewSimpleErr(message interface{}) SimpleErr {
	return SimpleErr{
		Message: message,
	}
}
