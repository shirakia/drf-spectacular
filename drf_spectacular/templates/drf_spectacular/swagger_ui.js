const swagger_settings  = {{settings|safe}}

const ui = SwaggerUIBundle({
  url: "{{schema_url|safe}}",
  dom_id: "#swagger-ui",
  presets: [
    SwaggerUIBundle.presets.apis,
  ],
  plugin: [
    SwaggerUIBundle.plugins.DownloadUrl
  ],
  layout: "BaseLayout",
  requestInterceptor: (request) => {
    request.headers["X-CSRFToken"] = "{{csrf_token}}"
    return request;
  },
  ...swagger_settings
})

{% if ouath2_config %}
ui.initOAuth({{oauth2_config|safe}})
{% endif %}