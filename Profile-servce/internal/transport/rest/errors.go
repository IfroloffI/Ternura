package rest

import (
	"encoding/json"
	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/domain"
	"net/http"
)

func jsonSimpleErr(w http.ResponseWriter, statusCode int, errMsg domain.SimpleErr) {
	resp, err := json.Marshal(errMsg)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.WriteHeader(statusCode)
	if _, err = w.Write(resp); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
	}
}
