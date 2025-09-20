import { printObject, genericFunction, genericFunctionArrow } from "./generics/generics";

// * Importación desde el archivo de interfaces
// Aquí importamos las interfaces 'Villain' y 'Hero' desde el archivo 'index' de la carpeta 'interfaces'.
import { Villain, Hero } from "./interfaces";


// * Ejemplo de uso de 'printObject'
// La función 'printObject' imprime en la consola cualquier argumento que se le pase.
// Esta función utiliza el tipo 'any', lo que significa que puede recibir cualquier tipo de dato.
// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6, 7]);
// printObject('Hola Mundo');

// * Problema con el uso de 'any'
// Cuando el argumento tiene el tipo 'any', no se tiene información sobre los métodos o propiedades
// disponibles para manipular el valor. Esto puede llevar a errores en tiempo de ejecución
// console.log(genericFunction(3.1416).toFixed(2));
// console.log(genericFunction('Hola Mundo').toFixed(2));
// console.log(genericFunction(new Date()).toFixed(2));

// * Uso de funciones genéricas
// Al utilizar funciones genéricas, el tipo de dato se infiere automáticamente o se puede especificar explícitamente
// Esto permite que TypeScript valide los métodos y propiedades disponibles para el tipo de dato enviado como argumento
console.log(genericFunction(3.1416).toFixed(2));
console.log(genericFunctionArrow('Hola Mundo').length);
console.log(genericFunction(new Date()).getFullYear());


// Ejemplo de los genericos
// Aquí creamos un objeto deadpool que implementa la estructura de la interfaz Villain
const deadpool = {
  name: 'Deadpool',
  realName: 'Wade',
  dangerLevel: 130
}

// Usamos la función genérica 'genericFunctionArrow' con el tipo explícito 'Villain'.
// Esto asegura que TypeScript valide que el objeto 'deadpool' cumple con la estructura de la interfaz 'Villain'.
console.log( genericFunctionArrow<Villain>(deadpool).dangerLevel );
