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
