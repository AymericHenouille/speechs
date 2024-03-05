package templates

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"speechs/controllers"
)

type TemplateResponse struct {
	Total     int        `json:"total"`
	Limit     int        `json:"limit"`
	Offset    int        `json:"offset"`
	Templates []Template `json:"templates"`
}

func TemplateController(db *sql.DB) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		var templateFn func(w http.ResponseWriter, r *http.Request)
		switch r.Method {
		case "POST":
			templateFn = createTemplates(db)
		case "GET":
			templateFn = readTemplates(db)
		case "PUT":
			templateFn = updateTemplates(db)
		case "DELETE":
			templateFn = deleteTemplates(db)
		default:
			templateFn = errorResponse
		}
		templateFn(w, r)
	}
}

func createTemplates(db *sql.DB) func(w http.ResponseWriter, r *http.Request) {
	createTemplatesFn := CreateTemlate(db)
	return func(w http.ResponseWriter, r *http.Request) {
		var templates []Template
		error := json.NewDecoder(r.Body).Decode(&templates)
		if error != nil {
			http.Error(w, error.Error(), http.StatusBadRequest)
			return
		}
		if !AllTemplatesValid(templates) {
			http.Error(w, "Invalid template", http.StatusBadRequest)
			return
		}
		for index, template := range templates {
			template, error := createTemplatesFn(template)
			if error != nil {
				http.Error(w, error.Error(), http.StatusInternalServerError)
				return
			}
			templates[index] = template
		}
		controllers.SendJsonResponse(w, templates)
	}
}

func readTemplates(db *sql.DB) func(w http.ResponseWriter, r *http.Request) {
	readTemplateFn := ReadTemplate(db)
	totalTemplateFn := TotalTemplate(db)
	return func(w http.ResponseWriter, r *http.Request) {
		total, error := totalTemplateFn()
		if error != nil {
			http.Error(w, error.Error(), http.StatusInternalServerError)
			return
		}

		offset, limit := controllers.ExtractOffsetLimit(r, total)
		templates, error := readTemplateFn(offset, limit)
		if error != nil {
			http.Error(w, error.Error(), http.StatusInternalServerError)
			return
		}

		controllers.SendJsonResponse(w, TemplateResponse{
			Total:     total,
			Limit:     limit,
			Offset:    offset,
			Templates: templates,
		})
	}
}

func updateTemplates(db *sql.DB) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {

	}
}

func deleteTemplates(db *sql.DB) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {

	}
}

func errorResponse(w http.ResponseWriter, r *http.Request) {
	http.Error(w, "Http method not allowed", http.StatusInternalServerError)
}
