# 🚀 Ciclo de Vida de Desarrollo de Software (SDLC) - Enfoque AI-First

El **SDLC** (Software Development Life Cycle) es el proceso sistemático para crear, mantener y retirar software. Esta guía adapta el SDLC tradicional a un flujo de trabajo moderno y **AI-FIRST**, potenciando la productividad con herramientas de inteligencia artificial.

## 🛠️ Herramientas y Tecnologías

Este flujo de trabajo se apoya en las siguientes tecnologías clave:

- 💎 **Gemini**: El modelo de IA central para razonamiento y generación.
- 🌌 **Antigravity**: Motor de agentes autónomos para tareas complejas.
- 🤖 **Agentes**: Entidades especializadas que ejecutan tareas dentro del proyecto.
- ⚡ **Jules**: Asistente de codificación y automatización.

### 🔗 Recursos Oficiales
- [Antigravity Download](https://antigravity.google/)
- [Jules](https://jules.google/)
- [Codelab: Getting Started with Antigravity](https://codelabs.developers.google.com/getting-started-google-antigravity?hl=es-419&authuser=0#0)

---

# 🧠 Estrategias de AI Prompting

Para llevar a Gemini a su máximo nivel de razonamiento técnico, dominar estas técnicas es fundamental.

## 1. Few-Shot Prompting (Aprendizaje con Ejemplos) 🎯
*Le da el "estilo" a la IA.*

**Regla de Oro:** Normalmente, **3 a 5 ejemplos** son suficientes.
- **Diversidad:** Si pides refactorizar, muestra una función simple y una clase compleja.

#### Ejemplo: Conversor de JS a TypeScript Moderno

# Regla de Refactorización
Cuando te pida "Refactorizar a TS", usa el siguiente padding mental:

------- START PROMPT -------
### 🛠 Transformación de JS a TS

    "Transforma mi código de JavaScript a TypeScript siguiendo estas reglas:
    
    1.  Cambia `function` por arrow function.
    2.  Agrega tipos explícitos.
    3.  Usa template literals (backticks)."
------- END PROMPT -------

**Input (Formato Actual):**
```javascript
function area(base, altura) {
  return base * altura;
}
```

**Output Deseado:**
```typescript
const area = (base: number, altura: number): number => base * altura;
```




---

## 2. Chain of Thought - CoT (Cadena de Pensamiento) ⛓️
*Le da el "cerebro" a la IA.*

El CoT obliga a la IA a "pensar en voz alta", reduciendo alucinaciones en lógica y arquitectura.

**Mejores Prácticas:**
1.  **La Frase Mágica:** Añade *"Pensemos paso a paso"* (Let's think step by step).
2.  **Justificación:** Pide explicar la lógica antes del código.
3.  **Estructura:** Analizar Requisitos -> Identificar Restricciones -> Proponer Solución.

#### Ejemplo: Revisión de Código de Seguridad

------- START PROMPT -------

> ### 🛡️ Security Reviewer Role
>
> **Context:**
> "Actúa como un Revisor de Seguridad. Tu proceso debe ser:
> 
> 1. **Analizar** vulnerabilidades (OWASP).
> 2. **Explicar** el riesgo detectado.
> 3. **Proporcionar** la solución corregida.
>
> ---
>
> **Ejemplo de Referencia:**
>
> * **Código:** `db.query("SELECT * FROM users WHERE id = " + id)`
> * **Razonamiento:** El usuario concatena variables directamente en el string; riesgo crítico de SQL Injection.
> * **Solución:** Implementar queries parametrizadas (Prepared Statements).
>
> ---
>
> **Tarea Actual:**
> *Ahora, analiza el siguiente código...*"
>

------- END PROMPT -------

## 3. El "Super Prompt" 🦸
La máxima eficiencia se logra combinando técnicas.

| Técnica | Qué aporta |
| :--- | :--- |
| **Rol (Senior Dev)** | Establece el estándar de calidad y tono. |
| **Few-Shot** | Fija el formato de salida y convenciones (naming, linter). |
| **CoT** | Asegura lógica correcta y minimiza errores. |

---



------- START SUPER PROMPT -------

> **ROL:** Actúa como un Desarrollador Senior Backend experto en NestJS, TypeORM y Clean Architecture.
>
> **CONTEXTO:** > Estoy construyendo un sistema POS multi-tenant. El stack usa PostgreSQL y seguimos la regla de: "Entidad -> DTOs -> Service -> Controller".
>
> **INSTRUCCIONES (Chain of Thought):**
> Antes de escribir el código, piensa paso a paso:
> 1. Analiza los campos necesarios para la entidad basada en el requerimiento.
> 2. Identifica las validaciones de seguridad necesarias (class-validator).
> 3. Define la lógica de negocio para el Servicio (considerando el TenantID).
> 4. Genera el código completo siguiendo el orden de archivos.
>
> **FEW-SHOT (Estilo de Código):**
> * Usa `readonly` en los constructores para inyección de dependencias.
> * Formato de respuesta: `JSON` estandarizado `{ data: T, message: string }`.
> * Ejemplo de naming: `create-product.dto.ts` (kebab-case para archivos).
>
> **TAREA:**
> "Crea el módulo completo para 'Categorías de Productos'. Una categoría tiene nombre, descripción y un estado (activo/inactivo). Debe incluir el CRUD básico y estar vinculado a un Tenant."
>
> **FORMATO DE SALIDA:**
> Entrega los bloques de código separados por nombre de archivo y añade una sección de "Consideraciones de Performance" al final.

------- END PROMPT -------

# 💎 Gemini Gems (Expertos Personalizados)

Las **Gems** son versiones personalizadas de Gemini con instrucciones permanentes (System Prompt).

### 📝 Cómo definir una Gema Experta
Usa la estructura: **Rol + Contexto + Tarea + Formato**.

#### Prompt Maestro para Arquitecto de Software:
> **Rol:** Actúa como Arquitecto Senior con 20 años de experiencia, experto en Clean Code y Principios SOLID.
>
> **Contexto:** Stack principal: React, Node.js, PostgreSQL.
>
> **Reglas:**
> 1. **Seguridad & Calidad:** Verifica vulnerabilidades y sigue SOLID. Advierte bugs antes de solucionar.
> 2. **DTOs:** Prefiere siempre `class-validator` y `class-transformer`.
> 3. **AI-First:** No pidas tareas manuales; genera scripts o comandos listos para ejecutar.
> 4. **Workflow de Módulos:** Entidad -> Servicio (Lógica) -> Controlador (Validación) -> Tests -> Swagger.
>
> **Formato:** Markdown, incluyendo sección de "Mejoras Sugeridas" al final.

### Casos de Uso Comunes
- **A. Refactorización:** "Identifica 'code smells' y aplica el patrón Composition."
- **B. Tests Automáticos:** "Genera suite Jest cubriendo éxito, error y carga."
- **C. Código Legado:** "Explica línea por línea esta función SQL compleja y diagrama su lógica."

---

# 🌌 Antigravity & Agentes

Antigravity es el motor que permite a los agentes ejecutar tareas complejas de forma autónoma dentro de tu entorno de desarrollo.

## 1. Niveles de Configuración ⚙️
Para sacar el máximo provecho, debes saber dónde dar las instrucciones correctas.

> **Nota:** Asegúrate de que las carpetas `.google` y `.agent` comiencen con un punto para que el sistema las identifique como archivos de configuración del entorno de IA.

### A. Nivel Proyecto (Contexto) 📁
**Ubicación:** `.google/` o `.agent/rules/`
Archivos `.md` que definen **"Quién es el agente"** para este proyecto específico.
*   *Ejemplo:* "En este repo usamos TypeORM y Tailwind. El linter es estricto."
*   *Ventaja:* Cualquiera que clone el repo hereda este conocimiento.

### B. Nivel Operativo (Workflows) ⚡
**Ubicación:** `.agent/workflows/`
Archivos que definen **"Qué pasos seguir"** (Algoritmos repetitivos).
*   *Ejemplo:* Un workflow de migración: `Crear rama` -> `Convertir archivo` -> `Correr tests` -> `Commit`.

### C. Nivel Personal (Global) 🌍
**Ubicación:** `~/.gemini/antigravity/...` (Fuera del Proyecto)
Esta configuración **NO reside en el repositorio**, sino en tu carpeta de usuario o configuración del editor. Es tu "mochila" de herramientas que viaja contigo a cualquier proyecto que abras.
*   *Ejemplo:* Tu estilo personal de git commits o scripts de limpieza.

#### 🛠️ Manual de Global Workflows

Para crear un Global Workflow en antigravity, necesitas definir un archivo (normalmente en formato YAML o Markdown, dependiendo de la implementación específica de tu motor de agentes) que dicte una secuencia de pasos automáticos.

Aquí tienes un ejemplo de cómo se vería un `clean-code-checker.workflow` diseñado para que lo puedas ejecutar en cualquier proyecto donde entres a trabajar:

**Archivo:** `~/.gemini/antigravity/clean-code-checker.workflow` (YAML)

```yaml
name: Global Clean Code & Security Audit
description: Analiza la calidad del código, detecta vulnerabilidades y verifica estándares del usuario.
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
```

##### ¿Cómo funciona este Workflow para ti?

*   **Independencia del Proyecto:** No importa si estás en el backend de qihotels o en el POS de restaurantes; al ser Global, lo invocas y el agente sabe qué buscar.
*   **Identificación Automática:** En el primer paso, el agente "mira" dónde está parado para decidir si usa comandos de npm, pnpm o dotnet.
*   **Output Estandarizado:** Siempre te dejará un archivo `CLEAN_CODE_REPORT.md` con el mismo formato, lo que te ayuda a mantener la disciplina de calidad en todos tus desarrollos.

##### ¿Cómo lo usarías?
Normalmente, desde tu terminal o la consola del agente, ejecutarías algo como:
`antigravity run clean-code-checker`

---

## 2. Flujo de Trabajo: Estrategia de Ramas 🌊
Para evitar conflictos y mantener el control, usa la estrategia **"Agent-Feature-Branch"**.

1.  **Human-Led Task (Inicio):** Tú creas la rama (ej. `feat/auth-module`).
2.  **Agent Execution (Desarrollo):** El agente trabaja en esa rama. Puede hacer commits, crear archivos y refactorizar.
3.  **Human Review (Cierre):** Tú revisas el Pull Request (PR) o los cambios antes de fusionar a `develop`/`main`.

> **¿Por qué?**
> *   **Aislamiento:** Si el agente rompe algo, solo rompe su rama.
> *   **Auditoría:** Diferencia claramente tu código del código generado por IA.

---

## 📂 Tabla de Referencia Rápida

| Objetivo | Herramienta | Ubicación |
| :--- | :--- | :--- |
| Definir reglas de negocio del proyecto | **Context Instructions** | `.google/*.md` |
| Automatizar una tarea de 5 pasos | **Workflows** | `.agent/workflows/` |
| Traer mis scripts favoritos a este PC | **Global Config** | `~/.gemini/...` |

### 📝 Resumen rápido para tu flujo:
- Usa `.google/` para que el agente entienda el código.
- Usa `.agent/` para que el agente sepa ejecutar procesos.
- Usa `~/.gemini/` para que el agente nunca olvide tus gustos personales.

#### 💡 En resumen:
- **.google/:** Qué es el proyecto (El contexto).
- **.agent/:** Cómo se hacen las cosas aquí (La acción).
- **~/.gemini/:** Cómo te gusta a ti que se trabaje (Lo personal).


---






# ⚡ Jules (jules.google) - El Agente de Ejecución

**Jules** es un agente de IA autónomo diseñado específicamente para integrarse con repositorios de código (GitHub/GitLab). A diferencia de un chat convencional, Jules no solo responde preguntas; **ejecuta tareas completas** en un entorno de computación seguro y aislado.

---

## 🛠️ ¿Por qué usar Jules? (Beneficios Clave)

| Beneficio | Descripción | Impacto en el POS |
| :--- | :--- | :--- |
| **Autonomía Asíncrona** | Le asignas una tarea y puedes cerrar la pestaña. Jules trabaja solo en una VM (Máquina Virtual). | "Jules, migra el módulo de inventario a TS mientras yo almuerzo". |
| **Visión de Repo Completo** | Entiende la relación entre archivos, carpetas y dependencias. | Sabe qué servicios de NestJS dependen de una entidad de TypeORM. |
| **Validación Real** | Jules corre comandos (`npm test`, `build`) para verificar que su código no rompe nada. | No te entrega código con errores de sintaxis o tipos. |
| **Delegación por Pull Request** | Jules crea una rama, hace los commits y abre un PR en tu repositorio. | Tú solo actúas como revisora (Code Reviewer), no como escritora. |

---

## 🚀 Flujo de Trabajo: Delegación Macro

Jules es ideal para tareas que consumen mucho tiempo o son repetitivas:

1.  **Asignación:** Le pides una tarea compleja (ej. "Implementa el módulo de descuentos en la API de Factus").
2.  **Planificación:** Jules analiza el repo y te presenta un plan de acción listando todos los archivos que modificará.
3.  **Ejecución:** Clona el repositorio, aplica los cambios siguiendo tus reglas de `.google/rules/` y valida la compilación.
4.  **Entrega:** Sube los cambios a una nueva rama y te entrega un **Audio Changelog** (resumen por voz) o un informe de cambios.

---

## 💡 Instrucciones para Jules (AGENTS.md)

Para que Jules sea realmente eficiente en este proyecto, siempre leerá el archivo `AGENTS.md` o las reglas en `.google/rules/`. Asegúrate de que sepa lo siguiente:

> "Jules, en este proyecto de **POS Multi-tenant**, recuerda:
> 1. No uses `any`, siempre define interfaces estrictas.
> 2. Cada nuevo endpoint debe incluir validaciones con `class-validator`.
> 3. Asegúrate de que todas las queries de TypeORM filtren por `tenantId`."

---

## 🔄 Comparativa: ¿Cuándo usar qué?

* **Gemini / Gems:** Para brainstorming, diseño de arquitectura y consultas rápidas de sintaxis.
* **Antigravity:** Para orquestar múltiples agentes y flujos de trabajo globales en tu PC.
* **Jules:** Para **ejecutar la codificación** de features completas, refactorizaciones masivas y corrección de bugs directamente en el repositorio.



## 🏗️ Jules como Arquitecto y DevOps

Jules no solo escribe funciones, también actúa como un ingeniero senior con visión de infraestructura:

* **Migraciones Masivas:** Capaz de actualizar versiones de frameworks y librerías, corrigiendo automáticamente los cambios que rompan la aplicación.
* **Experto en Contenedores:** Puede generar configuraciones completas de **Docker** y **Kubernetes** específicas para el stack del proyecto.
* **Resolución de Errores de Consola:** Lee los logs de error de la terminal, entiende por qué falló el despliegue o el test, y aplica la corrección de forma autónoma.
* **Refactorización Arquitectónica:** Puedes delegarle tareas de diseño de software como: "Aplica Clean Architecture a este módulo" o "Implementa un patrón Factory para los métodos de pago".