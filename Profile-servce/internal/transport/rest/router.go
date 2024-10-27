package rest

import (
	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/transport/middleware"
	mdwr "github.com/Benzogang-Tape/Ternura/Profile-servce/pkg/middleware"
	"github.com/gorilla/mux"
	"go.uber.org/zap"
	"net/http"
)

type AppRouter struct {
	profileHandler *ProfileHandler
}

func NewAppRouter(p *ProfileHandler) *AppRouter {
	return &AppRouter{
		profileHandler: p,
	}
}

func (rtr *AppRouter) InitRouter(logger *zap.SugaredLogger) http.Handler {
	r := mux.NewRouter()

	r.HandleFunc("/getProfiles", rtr.profileHandler.GetAllProfiles).Methods(http.MethodGet)
	r.HandleFunc("/getProfileByID/{USER_ID}", rtr.profileHandler.GetProfileByID).Methods(http.MethodGet)
	r.HandleFunc("/getProfilesByGender/{GENDER}", rtr.profileHandler.GetProfilesByGender).Methods(http.MethodGet)

	router := mdwr.AccessLog(logger, r)
	router = middleware.Panic(router, logger)

	return router
}
