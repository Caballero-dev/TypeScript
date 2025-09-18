(() => {

  // * clases en JavaScript
  // Las clases en JavaScript fueron introducidas en ES6. Antes de ES6, se utilizaban funciones constructoras
  // para crear objetos y simular el comportamiento de clases.
  // Un problema común en JavaScript es que no se especifican los tipos de datos de las propiedades,
  // lo que puede llevar a errores si no se tiene cuidado.

  class Avenger {

    // Declaración de propiedades
    // En JavaScript, las propiedades no son estrictamente necesarias en la definición de la clase.
    // Sin embargo, si no se declaran explícitamente, se pueden crear nuevas propiedades accidentalmente
    // al asignar valores, lo que puede causar errores difíciles de detectar.
    name;
    power;

    // * Constructor
    // El constructor se ejecuta automáticamente cuando se crea una nueva instancia de la clase.
    // this hace referencia a la instancia del objeto creado.
    constructor( name = 'No name', power = 0 ) {
      this.name = name;
      this.power = power;
    }

  }

  // * Clase FlyingAvenger
  // Esta clase extiende la funcionalidad de la clase Avenger para incluir la capacidad de volar.
  class FlyingAvenger extends  Avenger {
    fliying;
    
    // * Constructor
    // El constructor de la clase hija debe llamar al constructor de la clase padre usando super
    constructor( name, power ) {
      super( name, power); // Llama al constructor de la clase Avenger
      this.fliying = true;
    }

  }

  // * Creación de instancias
  const hulk = new Avenger('Hulk', 9001);
  const falcon = new FlyingAvenger('Falcon', 45);

  console.log( hulk );
  console.log( falcon );
  

})()