"use strict";
(() => {
    // En TypeScript, 'undefined' y 'null' son tipos primitivos que representan la ausencia de un valor.
    // Declaración de una variable con el tipo explícito 'undefined'.
    // Esto significa que la variable solo puede contener el valor 'undefined'.
    // let nada: undefined = undefined;
    // 'undefined' no puede ser asignado a una variable de tipo 'number' a menos que se permita explícitamente.
    // Esto depende de la configuración de TypeScript (por ejemplo, 'strictNullChecks').
    // let nada: number = undefined; // Error si 'strictNullChecks' está habilitado.
    // 'undefined' tampoco puede ser asignado a una variable de tipo 'boolean' a menos que se indique explícitamente
    // que la variable puede aceptar 'undefined' como un valor válido.
    let isActive = undefined; // Válido: La variable puede ser 'boolean' o 'undefined'.
    // Si 'strictNullChecks' está habilitado en el archivo 'tsconfig.json', TypeScript no permitirá asignar
    // 'undefined' a una variable de tipo 'boolean' sin usar una unión de tipos.
    // let isActive: boolean = undefined; // Error si 'strictNullChecks' está habilitado.
    console.log(isActive);
})();
