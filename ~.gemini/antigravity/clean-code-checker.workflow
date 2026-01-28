name: Global Clean Code & Security Audit
description: Analiza la calidad del código, detecta vulnerabilidades y verifica estándares de Ana.
trigger: manual | on_project_open

steps:
  - name: Scan Project Structure
    action: list_files
    description: "Identifica el stack (Node, Python, Go) leyendo package.json o similares."

  - name: Check Strict Rules
    action: run_agent_task
    prompt: |
      Analiza el código en este directorio y busca los siguientes 'Code Smells':
      1. Uso de 'any' en archivos TypeScript.
      2. Variables con nombres genéricos (data, temp, obj).
      3. Funciones de más de 30 líneas.
      4. Hardcoded Secrets (API Keys, tokens).
      5. Falta de validación en inputs de funciones públicas.

  - name: Security Audit (OWASP)
    action: run_command
    command: "npm audit" # O su equivalente según el stack detectado
    continue_on_error: true

  - name: Generate Report
    action: create_file
    path: "./CLEAN_CODE_REPORT.md"
    content: |
      # 🛡️ Reporte de Calidad - Proyecto: {{project_name}}
      **Fecha:** {{date}}
      **Auditor:** Gemini Antigravity (User's Global Standard)

      ## 📊 Resumen de Hallazgos
      {{step_2_output}}

      ## ⚠️ Vulnerabilidades de Dependencias
      {{step_3_output}}

      ---
      **Sugerencia:** ¿Quieres que cree una rama `fix/clean-code` y corrija los puntos más críticos automáticamente?