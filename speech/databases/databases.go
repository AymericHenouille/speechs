package databases

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/lib/pq"
)

func CreateDatabase(address string, dbname string, user string, password string) *sql.DB {
	dataSourceName := fmt.Sprintf("postgres://%s:%s@%s/%s?sslmode=disable", user, password, address, dbname)
	db, err := sql.Open("postgres", dataSourceName)
	if err != nil {
		panic(err)
	}
	return db
}

var fileContent map[string]string = make(map[string]string)

func readDataFile(file string) (string, error) {
	content := fileContent[file]
	if content == "" {
		data, readError := os.ReadFile(file)
		if readError != nil {
			return "", readError
		}
		content = string(data)
		fileContent[file] = content
	}
	return content, nil
}

func ExecuteQueryFile(db *sql.DB, file string, args ...any) (*sql.Rows, error) {
	content, readError := readDataFile(file)
	if readError != nil {
		return nil, readError
	}
	return db.Query(content, args...)
}
