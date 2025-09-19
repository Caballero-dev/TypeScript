(() => {

  // Esta interfaz define la estructura básica de un X-Men
  interface Xmen {
    name: string;
    realName: string;
    mutantPower ( id: number ): string;
  }

  // Esta interfaz define la estructura básica de un humano
  interface Human {
    age: number
  }

  // Esta clase implementa las interfaces 'Xmen' y 'Human'
  // Al implementar una interfaz, la clase está obligada a definir todas las propiedades y métodos
  // especificados en las interfaces.
  class Mutant implements Xmen, Human {
    // Estas propiedades son obligatorias debido a las interfaces implementadas.
    public age: number;
    public name: string;
    public realName: string;

    // El constructor inicializa las propiedades requeridas por las interfaces.
    constructor( age: number, name: string, realName: string ) {
      this.age = age;
      this.name = name;
      this.realName = realName;
    }

    // Este método implementa el método definido en la interfaz Xmen
    mutantPower(id: number): string {
      return `${this.name} tiene el poder con ID ${id} y tiene ${this.age} años`;
    }

  }

  // * Nota sobre el uso de interfaces
  // - Usar interfaces es útil cuando se espera que las estructuras puedan crecer o extenderse en el futuro.
  // - Si estás seguro de que una estructura no cambiará, puedes usar 'type' en lugar de una interfaz.
  // - Las interfaces son ideales para definir contratos que las clases deben cumplir.


})()