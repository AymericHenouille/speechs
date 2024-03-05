package controllers

import (
	"encoding/json"
	"math"
	"net/http"
	"net/url"
	"strconv"
)

const DEFAULT_LIMIT = 10

func ExtractOffsetLimit(r *http.Request, total int) (offset, limit int) {
	query := r.URL.Query()
	offset = readIntParameter(&query, "offset", 0)
	limit = readIntParameter(&query, "limit", DEFAULT_LIMIT)

	if offset < 0 {
		offset = 0
	}

	if limit < 0 {
		limit = DEFAULT_LIMIT
	}

	offset = int(math.Min(float64(total-1), float64(offset)))
	limit = int(math.Min(float64(total-offset), float64(limit)))

	return
}

func readIntParameter(query *url.Values, key string, defaultValue int) int {
	value := query.Get(key)
	if value == "" {
		return defaultValue
	}
	result, error := strconv.Atoi(value)
	if error != nil {
		return defaultValue
	}
	return result
}

func SendJsonResponse(w http.ResponseWriter, response interface{}) {
	jsonResponse, error := json.Marshal(response)
	if error != nil {
		http.Error(w, error.Error(), http.StatusInternalServerError)
		return
	}
	w.Write(jsonResponse)
}
