// * Los decoradores en TypeScript
// Los decoradores son funciones que se aplican a clases, métodos, propiedades o parámetros para modificar
// o extender su comportamiento. Son útiles para añadir validaciones, metadatos o lógica adicional.

// * Decorador printToConsole
// Este decorador se aplica a una clase y simplemente imprime su constructor en la consola.
function printToConsole(constructor: Function) {
  console.log(constructor);
}

// * Decorador de fábrica printToConsoleConditional
// Este decorador de fábrica retorna un decorador que imprime el constructor de la clase si el parámetro print es true
// print: Indica si se debe imprimir el constructor
const printToConsoleConditional = (print: boolean = false): Function => {
  return print ? printToConsole : () => {};
};

// * Decorador bloquearPrototipo
// Este decorador bloquea el prototipo de una clase, evitando que se puedan añadir o modificar propiedades y métodos.
// Utiliza Object.seal para prevenir modificaciones.
const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

// * Decorador CheckValidPokemonId
// Este decorador valida que el ID de un Pokémon sea un número positivo y menor o igual a 800.
// Se aplica a un método y modifica su comportamiento para incluir la validación.
function CheckValidPokemonId() {
  // Un decorador de método recibe tres parámetros:
  // - target: El prototipo de la clase (en métodos de instancia) o el constructor (en métodos estáticos)
  // - propertyKey: El nombre del método decorado
  // - descriptor: Un descriptor de propiedad que contiene información sobre el método decorado
  return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
    // console.log({ target, propertyKey, descriptor });

    // descriptor.value contiene la implementación original del método
    const origialMethod: Function = descriptor.value;

    // Sobrescribimos el método decorado para incluir la validación del ID
    descriptor.value = ( id: number ) => {
      if ( id < 1 || id > 800 ) {
        // Si el ID no está en el rango permitido, se muestra un error en la consola.
        return console.error('El id del prokemon debe estar entre 1 y 800');
      } else {
        // Si el ID es válido, se ejecuta el método original.
        return origialMethod(id);
      }
    }
  }
}

// * Decorador readonly
// Este decorador convierte una propiedad en solo lectura, dependiendo del valor de isWritable
function readonly( isWritable: boolean = true ): Function {
  // Un decorador de propiedad recibe dos parámetros:
  // - target: El prototipo de la clase (en propiedades de instancia) o el constructor (en propiedades estáticas)
  // - propertyKey: El nombre de la propiedad decorada
  return function( target: any, propertyKey: string) {
    // console.log({ target, propertyKey } );

    // Creamos un descriptor de propiedad para controlar el acceso y la escritura de la propiedad decorada.
    const descriptor: PropertyDescriptor = {
      get() {
        // console.log( this, 'getter');

        // Este getter se ejecuta cuando se accede a la propiedad decorada
        return 'Lalo'; // Valor predeterminado para la propiedad
      },

      // this - Hace referencia al objeto al que pertenece la propiedad decorada
      // val - El nuevo valor que se desea asignar a la propiedad decorada
      set(this, val) {
        // Este setter se ejecuta cuando se intenta modificar la propiedad decorada
        // Usamos Object.defineProperty para establecer la propiedad como solo lectura o modificable
        
        // console.log( this, val );
        Object.defineProperty( this, propertyKey, { 
          value: val, // Define el valor de la propiedad decorada.  
          writable: !isWritable, // Si isWritable es false, la propiedad será de solo lectura.
          enumerable: false, // La propiedad no será enumerable, es decir, no aparecerá en iteraciones como for...in o Object.keys
        })
        
      }
    }

    return descriptor; // Retornamos el descriptor para aplicar las restricciones
  }
}

// Esta clase representa un Pokémon y utiliza varios decoradores para demostrar su funcionalidad
// @printToConsole
@bloquearPrototipo // Bloquea el prototipo de la clase para evitar modificaciones
@printToConsoleConditional(true) // Imprime el constructor de la clase si el parámetro es true
export class Pokemon {

  // * Propiedad publicApi
  // Esta propiedad representa la URL pública de la API de Pokémon
  // Se decora con readonly para que sea de solo lectura
  @readonly( true )
  public publicApi: string = 'https://pokeapi.co'

  constructor(
    public name: string
  ) {}

  // * Método savePokemonToDB
  // Este método guarda un Pokémon en la base de datos
  // Se decora con CheckValidPokemonId para validar que el ID sea un número válido
  @CheckValidPokemonId()
  savePokemonToDB( id: number ) {
    console.log(`Pokemon guardo en BD ${ id }`);
    
  }

}