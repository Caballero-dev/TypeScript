(() => {


  // * Clase abstracta 'Mutante'
  // Las clases abstractas sirven como plantillas para otras clases.
  // No se pueden instanciar directamente, pero aseguran que las clases que las extiendan implementen
  // las propiedades y métodos definidos en ellas.
  abstract class Mutante {
    
    // * Constructor
    // Define las propiedades 'name' y 'realName' que serán comunes a todas las clases que extiendan de 'Mutante'.
    constructor(
      public name: string,
      public realName: string,
    ) {}
    
  }

  // * Clase Xmen
  // Esta clase extiende la clase abstracta Mutante y añade un método específico.
  class Xmen extends Mutante {
    
    // Este método es exclusivo de la clase Xmen y no está definido en la clase abstracta.
    salvarMundo() {
      return 'Mundo a salvo :)';
    }

  }

  // * Clase Villian
  // Esta clase también extiende la clase abstracta Mutante y añade un método específico.
  class Villian extends Mutante {

    // Este método es exclusivo de la clase 'Villian' y no está definido en la clase abstract
    conquistarMundo() {
      return 'Mundo conquistado';
    }
    
  }
  
  
  // * Creación de instancias
  // No se puede crear una instancia de la clase abstracta Mutante.
  // const mutante = new Mutante('Nombre', 'RealName');

  // Se crean instancias de las clases Xmen y Villian, que extienden de Mutante.
  const wolverine = new Xmen('Wolverine', 'Logan');
  const magneto = new Villian('Magneto', 'Magnus');

  // console.log(wolverine.salvarMundo());
  // console.log(magneto.conquistarMundo());

  // * Uso de la clase abstracta como tipo
  // La clase abstracta `Mutante` puede ser utilizada como un tipo para garantizar que los objetos
  // pasados como argumentos implementen las propiedades y métodos definidos en ella.
  const printName = (character: Mutante): void => {
    // Aquí sabemos que cualquier objeto que extienda de Mutante debe tener las propiedades name y realName
    console.log(character.realName);
  };

  // printName( wolverine );
  // printName( magneto );


})()