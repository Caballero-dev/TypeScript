"use strict";
// Crear las funciones autollamadas es para que no afecte el scope global
(() => {
    // TypeScript infiere automáticamente el tipo de la variable como booleano si se inicializa con un valor booleano.
    // let isSuperman = true;
    // Declaración explícita de una variable de tipo booleano sin inicializar.
    // Esto indica que la variable solo puede contener valores booleanos (true o false).
    // let isSuperman: boolean;
    // Si intentamos usar una variable booleana sin inicializar, TypeScript marcará un error.
    // Esto es diferente de JavaScript, donde no se muestra ningún error y la variable tendría el valor `undefined`.
    // console.log(isSuperman);
    let isSuperman = false;
    let isBatman = false;
    // Es válido asignar expresiones booleanas a una variable booleana.
    // isSuperman = true && false; // Resultado: false
    // TypeScript marcará un error si intentamos asignar un valor de tipo diferente (como un string) a una variable booleana.
    // isSuperman = (isBatman) ? 'ABC' : 'XYZ';
    // También marcará un error si la expresión puede devolver un valor que no sea estrictamente booleano
    // en este caso puede devolver un booleano o un string 
    // isSuperman = (isBatman) ? true : 'false';
    // Asignación válida: La expresión devuelve un valor booleano
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
    console.log({ isBatman });
})();
