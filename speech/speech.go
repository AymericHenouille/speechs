package main

import (
	"database/sql"
	"net/http"
	"speechs/controllers/templates"
	"speechs/databases"
)

func initDatabase() *sql.DB {
	db := databases.CreateDatabase("localhost:5432", "speechs", "postgres", "secret")
	rows, err := databases.ExecuteQueryFile(db, "scripts/speechs.sql")
	if err != nil {
		panic(err)
	}
	rows.Close()
	return db
}

func main() {
	db := initDatabase()
	defer db.Close()

	http.HandleFunc("/templates", templates.TemplateController(db))
	http.ListenAndServe(":8080", nil)
}
