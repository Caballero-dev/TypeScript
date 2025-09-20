
// Este archivo actúa como un "barril" (barrel), que es un patrón común en TypeScript para centralizar
// y simplificar las exportaciones de un directorio. En lugar de importar elementos desde archivos
// individuales, puedes importar directamente desde el directorio, haciendo referencia a este archivo.

// Esto permite que otros archivos importen Hero y Villain directamente desde el directorio interfaces

// Exporta la interfaz 'Hero' desde el archivo 'hero.ts'.
export { Hero } from './hero';
// Exporta la interfaz 'Villain' desde el archivo 'villain.ts'.
export { Villain } from './villain';