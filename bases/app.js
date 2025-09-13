"use strict";
// Declaración de una constante con un tipo explícito (string)
const msg = 'Hola mundo!!!!';
const hero = {
    name: 'Iroman',
    age: 45
};
// Aunque el editor de código nos muestra un error si intentamos asignar un valor de tipo incorrecto 
// (por ejemplo, un string en lugar de un number para age),
// TypeScript transpilará el código a JavaScript sin detenerse. Sin embargo, 
// mostrará una advertencia durante la transpilación para alertar al desarrollador.
// Ejemplo de código que generaría una advertencia
// hero.age = '50'; // Error: Type 'string' is not assignable to type 'number'.
hero.age = 41;
console.log(hero.age + 1);
console.log(msg);
