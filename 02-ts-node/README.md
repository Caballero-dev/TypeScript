# Proyecto inicial - Curso de TypeScript

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando

```
npm start
```
Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```
"start": "webpack serve --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente)

---

## Import y Exports

En TypeScript, los **imports** y **exports** son fundamentales para organizar y reutilizar el código en diferentes archivos. Nos permiten dividir nuestro proyecto en módulos, facilitando el mantenimiento y la escalabilidad.

- **Export**: Permite exponer variables, funciones, clases o interfaces desde un archivo para que puedan ser utilizadas en otros archivos.
- **Import**: Permite traer elementos exportados desde otros archivos para utilizarlos en el archivo actual.

### Tipos de exportaciones:
1. **Exportación independiente**:
   - Exporta múltiples elementos de un archivo, los cuales deben ser importados utilizando su nombre exacto.
   - Ejemplo: `export class Hero {}`.

2. **Exportación por defecto**:
   - Exporta un único elemento principal de un archivo, que puede ser importado sin llaves `{}`.
   - Ejemplo: `export default powers`.

3. **Importación combinada**:
   - Combina una exportación por defecto con exportaciones específicas.
   - Ejemplo: `import powers, { Power } from './data/powers';`.

4. **Importación de todos los elementos**:
   - Permite importar todos los elementos exportados de un archivo bajo un alias.
   - Ejemplo: `import * as HeroClasses from './classes/Hero';`.

> **Archivos relacionados:** [`Hero.ts`](src/classes/Hero.ts), [`powers.ts`](src/data/powers.ts), [`index.imports.ts`](src/index.imports.ts)

## Genericos

Los **genéricos** en TypeScript permiten crear funciones, clases o interfaces que trabajan con múltiples tipos de datos, proporcionando flexibilidad y reutilización del código. Esto asegura que el tipo de dato se mantenga consistente a lo largo de la implementación.

- **Ejemplo**: Uso de funciones genéricas para trabajar con diferentes tipos de datos sin perder el tipado estático.

> **Archivos relacionados:** [`generics.ts`](src/generics/generics.ts)


## Agrupar exportaciones

El patrón de **barril** (barrel) en TypeScript permite centralizar y simplificar las exportaciones de un directorio. Esto facilita la importación de múltiples elementos desde un único archivo, mejorando la organización y legibilidad del código.

- **Ejemplo**: Uso de un archivo `index.ts` para exportar interfaces como `Hero`, `Villain` y `Pokemon`.

> **Archivos relacionados:** [`index.ts`](src/interfaces/index.ts), [`index.generics.ts`](src/index.generics.ts)

## Axios

**Axios** es una biblioteca para realizar solicitudes HTTP de manera sencilla y eficiente. En este proyecto, se utiliza junto con genéricos para manejar respuestas tipadas, asegurando que los datos obtenidos de una API cumplan con una estructura definida.

- **Ejemplo**: Uso de Axios para obtener información de un Pokémon desde la API de PokeAPI, utilizando genéricos para tipar la respuesta.

> **Archivos relacionados:** [`get-pokemon.ts`](src/generics/get-pokemon.ts), [`pokemon.ts`](src/interfaces/pokemon.ts), [`index.generics.pokemon.ts`](src/index.generics.pokemon.ts)

## Quicktype.io

**quicktype.io** es una herramienta que convierte respuestas JSON en interfaces de TypeScript. Esto permite generar estructuras tipadas automáticamente, facilitando el trabajo con datos provenientes de APIs.

- **Ejemplo**: Generación de las interfaces relacionadas con Pokémon, como `Pokemon`, `Ability`, `Species`, entre otras.

> **Archivos relacionados:** [`pokemon.ts`](src/interfaces/pokemon.ts)