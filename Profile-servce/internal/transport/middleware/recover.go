package middleware

import (
	"fmt"
	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/domain"
	"go.uber.org/zap"
	"net/http"
)

func Panic(next http.Handler, logger *zap.SugaredLogger) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		defer func() {
			if err := recover(); err != nil {
				fmt.Println("recovered", err)
				logger.Errorw("panicMiddleware",
					"method", r.Method,
					"remote_addr", r.RemoteAddr,
					"url", r.URL.Path,
				)
				http.Error(w, domain.ErrInternalServerError.Error(), http.StatusInternalServerError)
			}
		}()
		next.ServeHTTP(w, r)
	})
}
