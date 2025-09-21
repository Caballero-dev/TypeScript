import { getPokemon } from "./generics/get-pokemon";
import { Pokemon } from "./interfaces";

getPokemon( 4 )
  .then( (res: Pokemon) => console.log( 'res', res.sprites.front_default ) ) // Cuando la promesa se resuelve, obtenemos un objeto de tipo Pokemon
  .catch( err => console.error( err ) ) // Si ocurre un error durante la solicitud lo capturamos aquí.
  .finally( () => console.log( 'Fin de getPokemon' ) ); // Este bloque se ejecuta siempre, independientemente de si la promesa se resolvió o rechazó

