(() => {

  // * Clase Apocalipsis
  // Esta clase implementa el patrón Singleton, que asegura que solo exista una única instancia de la clase
  class Apocalipsis {

    // * Propiedad estática
    // instance es una propiedad estática que almacena la única instancia de la clase Apocalipsis
    static instnace: Apocalipsis;

    // * Constructor privado
    // El constructor es privado para evitar que se creen nuevas instancias de la clase desde fuera de ella.
    private constructor(
      public name: string
    ) {}

    // * Método estático: callApocalipsis
    // Este método verifica si ya existe una instancia de la clase.
    // Si no existe, crea una nueva instancia de lo contrario, retorna la instancia existente.
    static callApocalipsis(): Apocalipsis {
      if ( !Apocalipsis.instnace ) {
        Apocalipsis.instnace = new Apocalipsis('Soy apocalipsis el único');
      }
      return Apocalipsis.instnace;
    }

    // * Método público: changeName
    // Permite cambiar el nombre de la instancia única.
    changeName( newName: string ): void {
      this.name = newName;
    }

  }


  // * Uso del patrón Singleton
  // Todas las siguientes llamadas a callApocalipsis retornan la misma instancia.
  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  apocalipsis1.changeName('Xavier');

  // * Ejemplo de intento de crear múltiples instancias
  // Si intentamos crear nuevas instancias directamente con new, TypeScript marcará un error
  // porque el constructor es privado.
  // const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1... el único');
  // const apocalipsis2= new Apocalipsis('Soy Apocalipsis2... el único');
  // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el único');

  console.log( apocalipsis1, apocalipsis2, apocalipsis3 );
  

})()