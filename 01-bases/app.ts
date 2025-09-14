/*
// Declaración de una constante con un tipo explícito (string)
const msg: string = 'Hola mundo!!!!';

const hero = {
  name: 'Iroman',
  age: 45
}

// Aunque el editor de código nos muestra un error si intentamos asignar un valor de tipo incorrecto 
// (por ejemplo, un string en lugar de un number para age),
// TypeScript transpilará el código a JavaScript sin detenerse. Sin embargo, 
// mostrará una advertencia durante la transpilación para alertar al desarrollador.

// Ejemplo de código que generaría una advertencia
// hero.age = '50'; // Error: Type 'string' is not assignable to type 'number'.

hero.age = 41;

console.log( hero.age + 1 );

console.log(msg); 
*/


// Función autollamada para evitar contaminar el scope global
(() => {
  
  // Cuando se crea una constante con un valor literal, TypeScript infiere su tipo como un "literal type".
  // Por ejemplo, 'a' tiene el tipo '10' (literal), no 'number'
  // const a = 10;
  
  // Cuando se crear una vairble con valor literal, TS infiere su tipo, en este caso como number
  // let b = 10;
  
  // Declaración de una constante con un tipo explícito (number)
  const a: number = 20;
  
  // let b: number = 10;
  // let b: number;

  // Declaración de una variable sin tipo explícito. Por defecto, TypeScript asigna el tipo 'any'
  let b;
  
  // Si no se especifica un tipo, la variable puede aceptar cualquier valor.
  // Esto puede llevar a errores si no se controla adecuadamente.
  b = 3.14;
  b = {};
  b = [];
  b = false;

  // Es una mala práctica usar variables de tipo 'any' porque:
  // - Otros desarrolladores no sabrán qué tipo de valor espera la variable.
  // - Se pierden funcionalidades como el autocompletado y la validación de tipos.

  // Ejemplo de una función con un parámetro tipado
  function sayHello ( msg: string ) {
    console.log (msg + ' dev' );
    msg.length;
  }

})()