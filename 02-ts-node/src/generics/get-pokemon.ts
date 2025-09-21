import axios from 'axios'; 
import { Pokemon } from '../interfaces';

// async transforma la salida a una promresa que resulve un numero

// Esta función realiza una solicitud HTTP para obtener información de un Pokémon desde la API de PokeAPI
// Retorna una promesa que resuelve un objeto de tipo 'Pokemon'
// La función utiliza 'async/await' para manejar la promesa de forma asíncrona
export const getPokemon = async ( pokemonId: number ): Promise<Pokemon> => {
  
  // * Solicitud HTTP con Axios
  // 'axios.get' realiza una solicitud GET a la URL proporcionada
  // '<Pokemon>': Especifica que la respuesta será de tipo 'Pokemon' (usando un genérico), se le indica que la 
  // respuesta luce como un Pokemon no estamos transformando la respuesta
  const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`);

  // * Tipado de la respuesta
  // Sin especificar el tipo de la respuesta, TypeScript no puede proporcionar ayuda sobre las propiedades disponibles.
  // Al tipar la respuesta con la interfaz Pokemon, obtenemos autocompletado y validación de tipos.

  // console.log(data.name); // Correcto: name es una propiedad válida de Pokemon.
  // console.log(data.picture); // Error: picture no es una propiedad válida de Pokemon.

  return data;
}