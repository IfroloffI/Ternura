package domain

type Config struct {
	AppPort string
	DBCfg   DBConfig
}

type DBConfig struct {
	Host   string
	Params string
	User   string
	Pass   string
}

func NewConfig() *Config {
	return &Config{}
}
