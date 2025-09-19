(() => {

  // * Interfaces con estructuras complejas
  // Cuando una interfaz tiene más de un nivel de anidación, es recomendable dividirla en múltiples
  // interfaces para mejorar la legibilidad y el mantenimiento del código.

  // Esta interfaz describe la estructura de una dirección
  interface Address {
    id: number;
    zip: number;
    city: string;
  }

  // * Nota sobre métodos en interfaces
  // Cuando se necesita implementar métodos, es recomendable usar una clase en lugar de una interfaz.
  // Las interfaces solo definen la estructura, pero no implementan lógica.

  // Esta interfaz describe la estructura de un cliente
  interface Client {
    name: string;
    age?: number;
    address: Address[]; // Relación con la interfaz Address
    // getFullAddress(id: string): void; // Método definido en la interfaz
    getFullAddres: ( id: number ) => string; // Método definido en la interfaz
  //  address: {
  //   id: number;
  //   zip: number;
  //   city: string;
  //  }
  }

  const client: Client = {
    name: 'Eduardo',
    age: 20,
    address: [
      {
        id: 18,
        zip: 98168,
        city: 'Ottawa',
      }
    ],
    getFullAddres( id: number ) { // Implementación del método
      const adr = this.address.find( ( adr: Address ) => adr.id === id );
      return adr ? `${ adr?.id } - ${ adr?.city } - ${ adr?.zip }` : `No hay dirección con el id ${ id }`;
    }
  }

  const client2: Client = {
    name: 'Juan',
    age: 19,
    address: [ 
      {
        id: 98,
        zip: 87642,
        city: 'Toronto',
      }
    ],
    getFullAddres( id: number ) {
      const adr = this.address.find( ( adr: Address ) => adr.id === id );
      return adr ? `${ adr?.id } - ${ adr?.city } - ${ adr?.zip }` : `No hay dirección con el id ${ id }`;
    }
  }

  // Llama al método getFullAddres del objeto client
  console.log(   client.getFullAddres(18) );
  

})()