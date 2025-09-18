(() => {

  // * Clase Avenger
  class Avenger {

    // * Propiedades privadas
    // 'private' significa que estas propiedades solo son accesibles dentro de la clase 'Avenger'.
    // private name: string;
    // private team: string;

    // * Propiedad pública
    // 'public' significa que esta propiedad es accesible desde fuera de la clase.
    // Si no se especifica un modificador de acceso, por defecto es 'public'.
    // Esta propiedad es opcional (indicada por '?').
    // public realName?: string;

    // * Propiedad estática
    // 'static' significa que esta propiedad pertenece a la clase y no a las instancias de la clase.
    // No se puede acceder a esta propiedad desde una instancia, pero sí directamente desde la clase.
    static avgAge: number = 35;

   // * Método estático
    // Los métodos estáticos pertenecen a la clase y no a las instancias.
    // 'this.name' en un método estático hace referencia al nombre de la clase, no a las propiedades de las instancias.
    static getAvgAge(): string {
      return this.name;
    }

    // * Constructor
    // El constructor se ejecuta automáticamente al crear una nueva instancia de la clase.
    /* constructor( name: string, team: string, realName?: string ) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    } */

    // * Forma corta de asignar propiedades
    // cuando se declara el tipo de aceso automaticamente ts detecta como una nueva propiedad de la 
    // clase, sin necesidad de declararlo arriba
    constructor( 
      private name: string, 
      private team: string, 
      public realName?: string 
    ) {}
    
   // * Método público
    // Si no se especifica un modificador de acceso, el método es público por defecto.
    // Este método retorna una cadena con el nombre y el equipo del Avenger.
    public bio(): string {
      // 'this.name' hace referencia a la propiedad 'name' de la instancia actual.
      return `${this.name} (${this.team})`;
    }
    
  }

  // * Creación de una instancia de la clase Avenger
  const antman: Avenger = new Avenger('Atman', 'Cap');
  // console.log( antman );
  // console.log( antman.bio() );

  // La propiedad estática 'avgAge' no es accesible desde la instancia 'antman'.
  // Sin embargo, se puede acceder directamente desde la clase 'Avenger'.
  // console.log( Avenger.avgAge );

  // Llama al método estático getAvgAge y muestra el resultado.
  // console.log( Avenger.getAvgAge() );

})()