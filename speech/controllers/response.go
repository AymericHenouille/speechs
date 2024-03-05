package controllers

import (
  "encoding/json"
  "net/http"
)

type Response[T interface{}] struct {
  Total int `json:"total"`
  Payload []T  `json:"payload"`
}

func NewResponse[T interface{}](total int, payload []T) Response[T] {
  return Response[T]{
    Total: total,
    Payload: payload,
  }
}

func SendResponse(w http.ResponseWriter, response interface{}) {
  w.Header().Set("Content-Type", "application/json")
  json.NewEncoder(w).Encode(response)
}
