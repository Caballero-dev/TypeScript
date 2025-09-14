"use strict";
(() => {
    // Declaración de un arreglo que solo acepta valores de tipo `number`.
    // Si se intenta agregar un valor de otro tipo (por ejemplo, un string o boolean), TypeScript marcará un error.
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // Ejemplo de un arreglo que acepta valores de tipo `string` o `number`:
    // const numbers: (string | number)[] = [1, '2', 3, 4, 5];
    // Intentar agregar un valor de tipo diferente al arreglo generará un error.
    // numbers.push(true);
    // Agregar un número al arreglo es válido.
    numbers.push(11);
    console.log(numbers);
    // Declaración de un arreglo de cadenas (string[])
    const villians = ['Omega Rojo', 'Batman', 'Iroman', 'Superman'];
    // TypeScript proporciona autocompletado y validación de tipos en funciones como `forEach`.
    // En este caso, `v` es inferido como `string` automáticamente
    villians.forEach(v => console.log(v.toUpperCase()));
})();
