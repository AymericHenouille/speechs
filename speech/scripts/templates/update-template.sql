UPDATE INTO speech_templates
SET
  templates_name = 'I am sorry, I cannot help you with that.'
  templates_description = 'This is a default response for when the bot cannot understand the user input.'
  templates_content = 'I am sorry, I cannot help you with that.'
WHERE template_id = 1;
