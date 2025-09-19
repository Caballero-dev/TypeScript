(() => {

  // * Interfaces para funciones
  // Las interfaces en TypeScript no solo se utilizan para definir la estructura de objetos,
  // también pueden ser utilizadas para definir la firma de funciones.
  // Esto es útil cuando queremos garantizar que una función cumpla con una estructura específica.


  // * Interfaz `AddTwoNumbers`
  // Esta interfaz define la firma de una función que
  // Recibe dos parámetros y retorna un valor de tipo number
  interface AddTwoNumbers {
    (a: number, b: number): number;
  }

  // * Declaración de una función que implementa la interfaz
  // La variable addNumbersFunction debe cumplir con la firma definida en la interfaz AddTwoNumbers.
  let addNumbersFunction: AddTwoNumbers;

  // * Implementación de la función
  // Se asigna una función a addNumbersFunction que cumple con la firma definida en la interfaz.
  addNumbersFunction = (a: number, b: number) => {
    return a + b;
  };

  console.log(addNumbersFunction(5, 3));

})()