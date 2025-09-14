"use strict";
(() => {
    // Declaración de una variable de tipo 'number' e inicialización con el valor 10.
    // Si no se inicializa, TypeScript marcará un error si se intenta usar antes de asignarle un valor.
    let avengers = 10;
    console.log(avengers);
    // Declaración de una constante de tipo 'number' con el valor 20.
    const villians = 20;
    // Comparación entre 'avengers' y 'villians'.
    // Si `avengers` es menor que 'villians', se imprime un mensaje indicando que hay problemas.
    // De lo contrario, se imprime un mensaje indicando que estamos a salvo.  
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos a salvo');
    }
    // Asignación de un nuevo valor a la variable 'avengers'.
    // En este caso, se utiliza la función 'Number' para convertir un string a un número.
    // Si el string contiene caracteres no numéricos, el resultado será 'NaN' (Not a Number),
    // que es considerado un valor de tipo 'number' en JavaScript/TypeScript.
    avengers = Number('123A');
    console.log({ avengers });
})();
