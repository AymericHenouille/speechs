INSERT INTO speech_templates (template_name, template_description, template_content)
VALUES ($1, $2, $3)
RETURNING template_id;
