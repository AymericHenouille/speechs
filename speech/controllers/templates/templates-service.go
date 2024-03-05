package templates

import (
	"database/sql"
	"net/http"
	"speechs/databases"
)

func CreateTemlate(db *sql.DB) func(template Template) (Template, error) {
	return func(template Template) (Template, error) {
		rows, error := databases.ExecuteQueryFile(db, "scripts/templates/create-template.sql", template.Name, template.Description, template.Content)
		if error != nil {
			return Template{}, error
		}
		defer rows.Close()
		rows.Next()
		error = rows.Scan(&template.Id)
		if error != nil {
			return Template{}, error
		}
		return template, nil
	}
}

func ReadTemplate(db *sql.DB) func(offset int, limit int) ([]Template, error) {
	return func(offset int, limit int) ([]Template, error) {
		rows, error := databases.ExecuteQueryFile(db, "scripts/templates/read-templates.sql", offset, limit)
		if error != nil {
			return []Template{}, error
		}
		defer rows.Close()
		templates := make([]Template, limit)
		for index := 0; rows.Next(); index++ {
			var template Template
			error = rows.Scan(&template.Id, &template.Name, &template.Description, &template.Content)
			if error != nil {
				return []Template{}, error
			}
			templates[index] = template
		}
		return templates, nil
	}
}

func UpdateTemplate(w http.ResponseWriter, r *http.Request) ([]Template, error) {
	return []Template{}, nil
}

func DeleteTemplate(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func TotalTemplate(db *sql.DB) func() (int, error) {
	return func() (int, error) {
		rows, error := databases.ExecuteQueryFile(db, "scripts/templates/total-templates.sql")
		if error != nil {
			return 0, error
		}
		defer rows.Close()
		rows.Next()
		var total int
		error = rows.Scan(&total)
		if error != nil {
			return 0, error
		}
		return total, nil
	}
}
