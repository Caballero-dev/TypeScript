# TypeScript

JavaScript (JS) no fue diseñado originalmente como un lenguaje de programación completo. Sin embargo, con el tiempo se ha convertido en un lenguaje robusto que permite realizar una gran variedad de tareas. A pesar de esto, JavaScript carece de algunas características importantes, como:

- **Tipado de variables**: No hay una validación estricta de los tipos de datos.
- **Errores en tiempo de escritura**: No se detectan errores hasta que el programa está en ejecución.
- **Autocompletado avanzado**: Limitado en comparación con lenguajes más estrictos.
- **Clases y módulos**: Introducidos en ES6, pero no tan robustos como en otros lenguajes.
- **Validación de objetos anidados**: No hay una forma estricta de validar estructuras complejas.
- **Tipado de respuestas HTTP**: No hay soporte nativo para manejar respuestas con tipos definidos.


## ¿Qué es TypeScript?

TypeScript (TS) busca ofrecer una experiencia de desarrollo similar a la de lenguajes como **Java** o **C#**, proporcionando herramientas que hacen que el desarrollo sea más seguro y eficiente. 

### Características principales de TypeScript:

1. **Superset de JavaScript**: TypeScript toma todo lo que es JavaScript (incluyendo ESNext) y lo expande con nuevas funcionalidades.
2. **Tipado estático**: Permite definir tipos estrictos para variables, funciones y objetos.
3. **Compatibilidad total con JavaScript**: Todo el código JavaScript es válido en TypeScript.
4. **Transpilación**: TypeScript no puede ejecutarse directamente en el navegador. En su lugar, se transpila a JavaScript, lo que significa que traduce el código TypeScript a JavaScript estándar.

```
⌈‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾⌉
|  ⌈‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾⌉    | 
|  |  ⌈‾‾‾‾‾⌉         |    |
|  |  | js | ESNEXT  | TS |
|  |  ⌊_____⌋         |    |
|  ⌊__________________⌋    |
⌊__________________________⌋

- JS: JavaScript estándar.
- ESNext: Características más recientes de JavaScript.
- TS: TypeScript, que incluye todo lo anterior y agrega nuevas funcionalidades.
```

### Diferencias clave

- **Transpilar**: Traducir un código de un lenguaje a otro manteniendo la misma funcionalidad. En este caso, TypeScript se transpila a JavaScript.
- **Compilar**: Convertir un código fuente en un binario ejecutable por la máquina.

## 01-bases
En esta sección se exploran los fundamentos de TypeScript, incluyendo:
- Tipos básicos como `string`, `number`, `boolean`, `enum`, y más.
- Uso de funciones, interfaces, clases, y namespaces.
- Comparación entre características de ES6 y TypeScript.

> **Más información:** Consulta [`01-bases`](01-bases/README.md)

## 02-ts-node
Se enfoca en el uso de `ts-node` para ejecutar TypeScript directamente sin necesidad de transpilarlo manualmente. También incluye:
- Decoradores: Cómo extender y modificar el comportamiento de clases, métodos y propiedades.
- Genéricos: Creación de funciones y clases reutilizables.
- Importación y uso de módulos.

> **Más información:** Consulta [`02-ts-node`](02-ts-node/README.md)


## 03-express-api
Demuestra cómo trabajar con librerías que no están escritas en TypeScript, utilizando **Express.js** como ejemplo. Incluye:
- Configuración de un servidor básico con Express.
- Uso de archivos de definición de tipos (`@types`).
- Transpilación y ejecución de un proyecto TypeScript con Node.js.

> **Más información:** Consulta [`03-express-api`](03-express-api/README.md)

## Recursos recomendados

Algunas páginas recomendadas para aprender más sobre TypeScript

- [Documentación Oficial - TypeScript](https://www.typescriptlang.org/docs/)
- [W3Schools - TypeScript](https://www.w3schools.com/typescript/index.php)
