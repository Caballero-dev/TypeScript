// * Importaciones en TypeScript

// Usamos 'as' para renombrar la importación.
// En este caso, importamos la clase 'Hero' desde el archivo 'Hero.ts' y la renombramos como 'SuperHero'.
import { Hero as SuperHero } from './classes/Hero';

// * Importación de todos los export
// Si queremos importar todos los elementos exportados de un archivo, usamos '*' y podemos asignarle un alias.
// Esto permite acceder a todos los elementos exportados como propiedades del alias.
// import * as HeroClasses from './classes/Hero';

// * Importación por defecto y exportaciones específicas
// Podemos combinar una importación por defecto con exportaciones específicas.
// import powers, { Power } from './data/powers';



const ironman = new SuperHero('IronMan', 1, 35);

// * Alternativa con importación de todos los export
// Si importamos todos los elementos como HeroClasses
// const ironman = new HeroClasses.Hero('IronMan', 1, 35);

console.log( ironman );
console.log( ironman.power );
