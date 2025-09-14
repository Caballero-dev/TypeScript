"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;
    // Declaración de una variable que debe cumplir con una condición:
    // Solo puede aceptar funciones como valor.
    // let myFunction;
    // Ejemplo de cómo definir el tipo de una función en TypeScript:
    // - 'Function': Permite asignar cualquier función, pero no es específico.
    // - '(y: number, z: number) => number': Define una función que recibe dos numeros, y retorna un número.
    // - '(y: string) => string': Define una función que recibe un string y retorna un string.
    // - '() => void': Define una función que no recibe parámetros y no retorna ningún valor.
    let myFunction;
    // Ejemplo de error al intentar asignar un valor que no es una función.
    // myFunction = 10;
    // console.log( myFunction );
    // Asignación de una función a 'myFunction'.
    // TypeScript infiere el tipo de la función asignada.
    // myFunction = addNumbers; // Solo lo aceptara cuando la firma conincida
    // console.log( myFunction(1, 4) );
    // Asignación de la función 'greet' a 'myFunction'.
    // myFunction = greet; // Solo lo aceptara cuando la firma conincida
    // console.log(myFunction('Lalo'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
