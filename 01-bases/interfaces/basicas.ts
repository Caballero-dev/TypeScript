(() => {

  // * interfaces
  // Las interfaces en TypeScript son una forma de definir la estructura de un objeto.
  // A diferencia de los 'type', las interfaces son extendibles, lo que significa que pueden ser
  // combinadas o ampliadas para crear nuevas interfaces.
  // Las interfaces no tienen representación en el código JavaScript transpilado.

  // * Definición de la interfaz 'Hero'
  // Esta interfaz describe la estructura de un héroe,
  interface Hero {
    name: string;
    age?: number;
    powers: string[]; 
    getName?: () => string;
  }

  let flash: Hero = {
    name: 'Barry',
    age: 24,
    powers: ['Velocidad', 'Viajar en el tiempo'],
  }
  
  let superman: Hero = {
    name: 'Clark',
    age: 60,
    powers: ['Volar'],
    getName() {
      return this.name;
    }
  }

  // Las interfaces son útiles para garantizar que los objetos cumplan con una estructura específica.
  // Además, al ser extendibles, permiten crear nuevas interfaces basadas en otras existentes.

})()