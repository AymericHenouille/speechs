package templates

type Template struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Content     string `json:"content"`
}

func (template *Template) IsValid() bool {
	haveName := len(template.Name) > 0
	haveDescription := len(template.Description) > 0
	haveContent := len(template.Content) > 0
	return haveName && haveDescription && haveContent
}

func AllTemplatesValid(templates []Template) bool {
	for _, template := range templates {
		if !template.IsValid() {
			return false
		}
	}
	return true
}

func NewTemplate(id int, name string, description string, content string) *Template {
	return &Template{id, name, description, content}
}
