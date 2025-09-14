"use strict";
(() => {
    // Declaración de una tupla:
    // Una tupla es un tipo especial de arreglo en TypeScript donde se define el tipo y la cantidad de elementos.
    // En este caso, la tupla 'hero' debe contener:
    // - Un 'string' como primer elemento.
    // - Un 'number' como segundo elemento.
    // - Un 'boolean' como tercer elemento.
    const hero = ['Dr Strange', 100, false];
    // Intentar asignar un valor de tipo diferente al definido en la tupla generará un error.
    // hero[0] = 50;
    // hero[1] = 'Iroman';
    // hero[2] = 123;
    // Se pueden reasignar valores siempre y cuando coincidan con los tipos definidos en la tupla.
    hero[0] = 'Iroman';
    hero[1] = 50;
    hero[2] = true;
    console.log(hero);
    // las tuplas se puede controlar valores y que tipo de datos tiene y como luce
    // as imple vista en js es considerado un arreglo pero en ts una tupla
    // se pueden colocar la definicion de cada uno de las definiciones de cada uno de los tipos
    // Notas sobre las tuplas:
    // - Las tuplas permiten controlar el tipo y la posición de cada elemento.
    // - Aunque en JavaScript las tuplas son técnicamente arreglos, en TypeScript se definen como un tipo específico.
})();
