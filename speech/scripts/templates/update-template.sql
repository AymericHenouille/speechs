UPDATE INTO speech_templates
SET
  templates_name = $2
  templates_description = $3
  templates_content = $4
WHERE template_id = $1;
