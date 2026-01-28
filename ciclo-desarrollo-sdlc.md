### Ciclo de vida de desarrollo de software (SDLC)

El SDLC es un proceso sistemático para crear, mantener y retirar software. Define las fases por las que pasa un proyecto de software desde su concepción hasta su desmantelamiento.

vision del SDLC adaptada a un flujo de trabajo AI-FIRST y practico

herramientas y tecnologías:
- Gemini
- Antigravity
- Agentes
- Jules


# AI PROMPTS
Para llevar a Gemini a su máximo nivel de razonamiento técnico, dominar estas dos técnicas es fundamental. Mientras que el Few-Shot le da el "estilo", el Chain of Thought (CoT) le da el "cerebro".

Mejores Prácticas:

Regla de 3: Normalmente, 3 a 5 ejemplos son suficientes. Demasiados pueden confundir el contexto; muy pocos pueden no marcar el patrón.

Diversidad: Si pides refactorizar código, da un ejemplo de una función corta y otro de una clase compleja.


1. Few-Shot Prompting (Aprendizaje con ejemplos) 

Prompt: Conversor de JS a TypeScript moderno
"Transforma mi código de JavaScript a TypeScript siguiendo estas reglas:

Cambia function por una arrow function (const nombre = () =>).

Agrega tipos a los parámetros y al resultado.

Si hay texto, usa backticks (`).


ejemplo  

formato actual 

function area(base, altura) {
  return base * altura;
}

formato deseado

const area = (base: number, altura: number): number => base * altura;




2. Chain of Thought - CoT (Cadena de Pensamiento)

El CoT obliga a la IA a "pensar en voz alta" antes de escupir el código. Esto reduce drásticamente las alucinaciones en problemas de lógica, algoritmos o arquitectura.

Mejores Prácticas:
La frase mágica: Añade siempre "Pensemos paso a paso" (Let's think step by step). Esto activa el proceso de razonamiento secuencial.

Pide justificación: Instruye a Gemini a explicar la lógica antes de mostrar el bloque de código.

Estructura el pensamiento: Pídele que primero identifique los requisitos, luego las restricciones y finalmente la solución.

Ejemplo aplicado a un Algoritmo Complejo:

"Necesito una función que calcule el camino más corto en un grafo dirigido pero con pesos negativos. Primero, analiza si el algoritmo de Dijkstra es suficiente o si necesitamos Bellman-Ford. Segundo, describe los pasos del algoritmo seleccionado. Finalmente, escribe el código en Python. Pensemos paso a paso."




Ejemplo Pro de "Gema" para Code Review:
"Actúa como un Revisor de Código de Seguridad. Tu proceso debe ser:

Analizar el código en busca de vulnerabilidades (OWASP).

Explicar por qué cada punto es un riesgo.

Dar la solución corregida.

Ejemplo de revisión: 

Input: db.query("SELECT * FROM users WHERE id = " + id) Razonamiento: El usuario está concatenando variables directamente en la query, lo que permite SQL Injection. Solución: Usa queries parametrizadas.

Ahora, analiza el siguiente código: [Insertar código]"


### Gemini Gema

## uso de gemas para el desarrollo de software para definir una gema debes usar un Role Prompitng Agresivo es decir en lugar de decirle ayudame con una funcion para validar emails 

### prompt para crear una gema

1. Crear tu "Gema" Experta (Gems)
Las Gems son versiones personalizadas de Gemini a las que les das instrucciones permanentes (un "System Prompt"). Para crear una experta en desarrollo:

Ve a gemini.google.com.

En la barra lateral, haz clic en "Explorar Gems" y luego en "Nueva Gem".

Configura el Experto: Usa la estructura Rol + Contexto + Tarea + Formato.

## Instruciones 

1. Actua como un arquitecto senior con 20 años de experiencia en desarrollo de software, experto en clean code y tu objetivo es ayudarme a construir un sistema robusto, mantenible y escalable. 

Contexto: Trabajo principalmente con React, Node.js y PostgreSQL.

Reglas: 

1. Siempre que sugieras código, incluye comentarios breves, verifica vulnerabilidades y sigue principios SOLID. Si detectas un bug potencial, adviértelo antes de dar la solución.

2. siempre propon soluciones que sigan los principios SOLID y clean code

3. prefiere el uso de los DTO con class-validator y class-transformer

4. Enfoque AI-FIRST: No me pidas que haga tareas manuales. Si necesitas que ejecute un comando, que cree un archivo o que configure algo, hazlo tú mismo o dame el script exacto para copiar y pegar.

5. si te pregunto por un modulo genera primero la entidad luego el servicio con logica de negocio y finalmente el controlador con validaciones de entrada y salida e incluye siempre los tests unitarios manejo de errores global y documentacion de la api con swagger

Formato: Entrega el código en bloques Markdown y añade una sección de 'Mejoras Sugeridas' al final."




A. Refactorización y Deuda Técnica
No le pidas solo que arregle un error. Pídele que mejore la arquitectura:

Prompt: "Analiza este componente de React. Identifica 'code smells' y refactorízalo para usar el patrón de diseño 'Composition' y mejorar la legibilidad."

B. Generación de Tests Automáticos
Escribir tests suele ser tedioso. Gemini lo hace en segundos:

Prompt: "Genera una suite de pruebas unitarias usando Jest y React Testing Library para este componente. Cubre casos de éxito, error y estados de carga."

C. Explicación de Código Legado
Si heredas un proyecto caótico, usa a Gemini como traductor:

Prompt: "Explica línea por línea qué hace esta función de SQL de 200 líneas y crea un diagrama lógico de su funcionamiento en formato texto."



4. Tips Avanzados para Devs
Sube archivos: Puedes subir archivos .js, .py o incluso PDFs de documentación técnica para que Gemini tenga el contexto real de tu proyecto.

Modo "Pair Programming": Pídele que no te dé la solución de inmediato: "No me des el código corregido. Explícame el error que cometí y dame pistas para que yo lo resuelva solo." Esto ayuda a tu crecimiento técnico.

Deep Think: Si tienes un problema de lógica algorítmica muy complejo, asegúrate de activar el modelo Deep Think (si está disponible en tu versión) para un razonamiento más profundo antes de generar código.


3. Combinando ambas: El "Super Prompt"
La mayor eficiencia se logra cuando mezclas instrucciones de rol + Few-Shot + CoT.


Técnica,Qué aporta
Rol (Senior Dev),Establece el estándar de calidad y tono.
Few-Shot,"Establece el formato de salida y convenciones (naming, linter)."
CoT,Asegura que la lógica del algoritmo sea correcta y sin errores de bulto.


### Antigravity

## Agentes 

1. El Flujo de Trabajo: ¿Ramas o Mono-rama?
La respuesta corta es: Sí, usa ramas (branches), pero con una estrategia específica para agentes.

Estrategia de "Agent-Feature-Branch"
No dejes que los agentes escriban directamente en main. El flujo ideal es:

Human-Led Task: Tú creas una rama (ej. feat/auth-system).

Agent Execution: El agente trabVaja en esa rama. Antigravity permite que los agentes realicen commits o propongan cambios.

Human Review: Tú revisas el Pull Request (PR) generado por el agente.

¿Por qué ramas?
Aislamiento: Los agentes pueden "alucinar" o generar código roto. Si trabajan en una rama aislada, no rompes el despliegue de otros compañeros.

Auditoría: Puedes ver exactamente qué líneas escribió el agente frente a las tuyas.



Ejemplo 1: El Agente "Traductor de Código"

Ejemplo 2: El Agente "Code Reviwer"


ejemplo para ejecutar el agente "Traductor de Código" 

@agente lee el archivo raductor de codigo.md basado en estas reglas realiza la traducion del codigo js en el archivo function.ts

al escribir y anteponer el arroba @ muestra una lista de archivos para selecionar el archivo que deseas traducir, el agente tiende a robar la seccion d ela consola es decir veras al agente nunca uses la terminal activa del usuario trabajar en el archivo para esto puedes especificarle en el prompt que no escriba en tu seccion o renombrar una terminal para que el agente trabaje en ella renombrandola como Agente-Terminal 


# Jules


