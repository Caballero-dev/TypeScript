(() => {

  // Esta clase representa un Avenger con propiedades básicas
  class Avenger {

    constructor(
      public name: string,
      public realName: string
    ) {
      console.log( 'Constructor Avenger llamado' );
    }

    // * Método protegido
    // 'protected' significa que este método solo es accesible dentro de la clase 'Avenger'
    // y en las clases que hereden de ella.
    protected getFullName() {
      return `${ this.name } ${ this.realName }`;
    }

  }

  // * Clase 'Xmen'
  // Esta clase extiende la funcionalidad de la clase 'Avenger' y añade una nueva propiedad 'isMutant'.
  class Xmen extends Avenger {

    // * Constructor
    // El constructor de la clase hija debe llamar al constructor de la clase padre usando 'super'.
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
    ) {
      super( name, realName ); // el suer se debe llamar tan pronto se pueda
      console.log( 'Constructor Xmen llamado' );
    }

    // * Getter
    // Un getter es un método que actúa como una propiedad y retorna un valor
    get fullName(): string {
      return `${this.name} - ${this.realName}`;
    }

    // * Setter
    // Un setter es un método que permite establecer un valor en una propiedad
    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error('El nombre debe ser mayor de 3 letras');
      }
      this.name = name;
    }

    // * Método público
    // Este método utiliza 'super' para acceder al método protegido 'getFullName' de la clase padre.
    // 'super': Hace referencia a la clase base ('Avenger').
    // 'this': Hace referencia a la instancia actual de la clase ('Xmen').
    getFullNameDesdeXmen() {
      console.log( super.getFullName() );
      
    }

  }

  // * Creación de instancias
  // Se crea una instancia de la clase 'Xmen' llamada 'wolverine'.
  const wolverine = new Xmen('Wolverine', 'Logan', true);

  console.log(wolverine);
  // Llama al método 'getFullNameDesdeXmen' de la instancia 'wolverine'.
  wolverine.getFullNameDesdeXmen();

  // * Uso del setter
  // Establece un nuevo nombre para 'wolverine' utilizando el setter 'fullName'.
  wolverine.fullName = 'Lalo';

  // * Uso del getter
  // Obtiene el nombre completo de 'wolverine' utilizando el getter 'fullName'.
  console.log(wolverine.fullName);
  
  // * Creación de una instancia de la clase Avenger
  const nuevoAvenger =  new Avenger('Iroman', 'Tony');

  // * Restricción de acceso a métodos protegidos
  // No se puede acceder al método `getFullName` desde una instancia de `Avenger`,
  // ya que es un método protegido. TypeScript marcará un error.
  // console.log(nuevoAvenger.getFullName());


})()