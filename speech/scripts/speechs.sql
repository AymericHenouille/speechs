CREATE SEQUENCE IF NOT EXISTS speech_template_id_seq;

CREATE TABLE IF NOT EXISTS speech_templates (
  template_id INT DEFAULT nextval('speech_template_id_seq'),
  template_name VARCHAR(255) NOT NULL,
  template_description TEXT,
  template_content TEXT NOT NULL,
  CONSTRAINT speech_template_pk PRIMARY KEY (template_id)
);

-- Insert 1000 rows into speech_templates
INSERT INTO speech_templates (template_name, template_description, template_content)
SELECT
  'Template ' || i,
  'Description for template ' || i,
  'Content for template ' || i
FROM generate_series(1, 1000) i;
