package config

import (
	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/domain"
	"github.com/spf13/viper"
	"log"
)

func InitConfig() {
	viper.SetConfigName("config/config.yaml")
	viper.AddConfigPath(".")
	if err := viper.ReadInConfig(); err != nil {
		log.Panicf("Fatal error config file: %s", err.Error())
	}
}

func Parse() *domain.Config {
	port := viper.GetString("app.port")
	if port == "" {
		log.Panicf("port: %s", domain.ErrConfigParsingFailed.Error())
	}
	dbHost := viper.GetString("db.host")
	if dbHost == "" {
		log.Panicf("host: %s", domain.ErrConfigParsingFailed.Error())
	}
	dbParams := viper.GetString("db.params")
	dbLogin := viper.GetString("db.user")
	if dbLogin == "" {
		log.Panicf("dbLogin: %s", domain.ErrConfigParsingFailed.Error())
	}
	dbPass := viper.GetString("db.password")
	if dbPass == "" {
		log.Panicf("dbPass: %s", domain.ErrConfigParsingFailed.Error())
	}

	return &domain.Config{
		AppPort: port,
		DBCfg: domain.DBConfig{
			Host:   dbHost,
			Params: dbParams,
			User:   dbLogin,
			Pass:   dbPass,
		},
	}
}
