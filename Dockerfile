FROM golang:1.23-alpine
LABEL authors="DJ Tape"

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY ./Profile-servce ./

RUN go build -o main ./cmd/app/main.go

EXPOSE 8080

CMD ["./main"]

#ENTRYPOINT ["top", "-b"]