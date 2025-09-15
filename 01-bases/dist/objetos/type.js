"use strict";
(() => {
    // * Uso de type
    // 'type' se utiliza para definir un tipo personalizado en TypeScript.
    // Esto es útil para reutilizar estructuras de datos complejas y mantener el código más limpio y mantenible.
    // Declaración de un objeto 'flash' con el tipo 'Hero'
    let flash = {
        name: 'Barry',
        age: 24,
        powers: ['Velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: 'Clark',
        age: 60,
        powers: ['Volar'],
        getName() {
            return this.name;
        }
    };
    // * Ventajas de usar 'type':
    // - Si se necesita cambiar algo en la estructura del tipo 'Hero', TypeScript marcará errores en todas las partes
    //   del código donde se utilice este tipo, ayudando a mantener la consistencia.
    // - Facilita la reutilización del tipo en múltiples lugares del proyecto.
})();
