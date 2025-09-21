import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

// * Intento de expansión del prototipo
// Aquí se intenta agregar una nueva propiedad al prototipo de la clase Pokemon
// Debido al decorador @bloquearPrototipo, el prototipo está sellado (Object.seal),
// lo que impide agregar nuevas propiedades o métodos.
// (Pokemon.prototype as any).customName = 'Pikachu';

// * Modificación de una propiedad de solo lectura
// La propiedad publicApi está decorada con @readonly(true), lo que la hace de solo lectura
// Si intentamos modificar su valor, el decorador evitará que el cambio se aplique
// charmander.publicApi = 'https://fernando-herrera.com';

// * Validación del ID del Pokémon
// El método savePokemonToDB está decorado con @CheckValidPokemonId, que valida que el ID
// esté en el rango de 1 a 800. Si se pasa un ID fuera de este rango, se mostrará un error en la consola
charmander.savePokemonToDB(50);

console.log( charmander );

