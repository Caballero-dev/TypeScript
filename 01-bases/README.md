# Bases

## Instalación de TypeScript

Para instalar TypeScript de forma global en tu computadora, utiliza el siguiente comando:

```bash
npm install -g typescript
```
Esto instalará el compilador de TypeScript (`tsc`) de manera global, permitiéndote usarlo desde cualquier directorio.

## Transpilar TypeScript a JavaScript

Cuando escribimos código en TypeScript (archivos con extensión `.ts`), los navegadores no pueden interpretarlo directamente. Por lo tanto, es necesario transpilar el código TypeScript a JavaScript utilizando el siguiente comando:

```bash
tsc app.ts
```

Esto generará un archivo `.js` a partir del archivo `.ts`. Por ejemplo:

- Código TypeScript: [app.ts](app.ts)
- Código JavaScript generado: [app.js](dist/app.js)

## Archivo de configuración de TypeScript

El comando `tsc --init` crea un archivo de configuración llamado `tsconfig.json`. Este archivo permite personalizar y configurar el comportamiento del compilador de TypeScript. Algunas configuraciones comunes incluyen:

- **`target`**: Especifica la versión de JavaScript a la que se transpilará el código.
- **`strict`**: Habilita el modo estricto para mejorar la seguridad del código.
- **`outDir`**: Define el directorio donde se generarán los archivos `.js`.
- **`include` y `exclude`**: Permiten incluir o excluir archivos y carpetas específicas.

## Modo Observador

TypeScript incluye un modo observador que permite monitorear los cambios en los archivos `.ts` y transpilar automáticamente el código a JavaScript. Para activar este modo, utiliza el siguiente comando:

```bash
tsc --watch
```

Esto es útil para trabajar de manera más eficiente, ya que no es necesario ejecutar manualmente el comando `tsc` cada vez que se realiza un cambio.

## Tipos de datos en TypeScritp

- Primitivos:
  - String: Representa cadenas de texto.
  - Number: Representa números.
  - Boolean: epresenta valores lógicos.
  - Symbol: epresenta valores únicos.
  - Null y Undefined: Representan valores vacíos o no definidos.

- Compuestos
  - Objetos litareales: Estructuras con pares clave-valor.
  - Clases: Plantillas para crear objetos con propiedades y métodos.
  - Funciones: Bloques de código reutilizables.
  - Arreglos: Colecciones de elementos.

- Otros tipos
  - Interfaces: Definen la forma de un objeto
  - Genericos: Permiten crear componentes reutilizables que funcionan con múltiples tipos.
  - Tuplas: Arreglos con un número fijo de elementos y tipos específicos.

**Inferencia de tipos**:
TypeScript, siempre que sea posible, intentará **inferir el tipo de dato** de una variable basándose en su valor inicial.

> **Más información:** Consulta [`Tipos`](tipos/README.md)

## Funciones 

En esta sección se trabaja con funciones
- **Argumentos requeridos**: Parámetros que deben ser proporcionados al llamar una función.
- **Argumentos opcionales**: Parámetros que no son obligatorios y se definen con `?`.
- **Parámetros con valores por defecto**: Parámetros que tienen un valor inicial si no se proporciona uno.
- **Parámetro REST**: Permite capturar múltiples argumentos en un arreglo.
- **Tipos de funciones**: Cómo definir el tipo de los parámetros y el retorno de una función.

> **Más información:** Consulta [`Funciones`](funciones/README.md)


## Objetos 

En esta sección se trabajara con objetos
- **Objetos básicos**: Cómo TypeScript infiere automáticamente los tipos de las propiedades de un objeto literal.
- **Objetos con tipos específicos**: Cómo definir objetos con tipos explícitos para garantizar que cumplan con una estructura definida.
- **Métodos dentro de objetos**: Cómo incluir métodos en objetos y definir su tipo de retorno.
- **Tipos personalizados**: Uso de `type` para crear tipos reutilizables y mantener el código limpio.
- **Tipos de unión**: Cómo manejar objetos que puedan tener múltiples formas utilizando `|`.

> **Más información:** Consulta [`Objetos`](objetos/README.md)