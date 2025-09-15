"use strict";
(() => {
    // * Objeto básico
    // TypeScript infiere automáticamente el tipo de las propiedades cuando se declara un objeto literal.
    // let flash = {
    //   name: 'Barry', // Inferido como string
    //   age: 24,
    //   powers: ['Velocidad', 'Viajar en el tiempo'],
    // }
    var _a;
    // Si intentamos reasignar el objeto con propiedades adicionales o diferentes tipos,
    // TypeScript marcará un error porque ya infirió el tipo del objeto.
    // flash = {
    //   name2: 'Otro nombre', // Error: Propiedad no definida en el tipo inferido.
    //   name: 'Tony',
    //   age: 40,
    //   powers: ['Millonario', 'Filántropo'],
    //   getNombre() { // Error: Método no definido en el tipo inferido.
    //     return this.name;
    //   }
    // }
    // * Objeto con tipos específicos y métodos
    // Declaración de un objeto con un tipo explícito.
    let flash = {
        name: 'Barry',
        age: 24,
        powers: ['Velocidad', 'Viajar en el tiempo'],
    };
    // Reasignación del objeto 'flash' con valores válidos según el tipo definido.
    flash = {
        name: 'Tony',
        // age: 40, // Esta propiedad es opcional, por lo que puede omitirse.
        powers: ['Millonario', 'Filantropo'],
        getName() {
            return this.name;
        }
    };
    // Uso del operador opcional ( ?. ) para verificar si el método 'getName' está definido.
    // Si 'getName' está definido, se llama al método. De lo contrario, se retorna el mensaje 'Método no definido'.
    console.log(((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash)) || 'Método no definido');
    // * Problema con la definición en línea
    // Al querer realizar otro objeto con las mismas propiedades, funciona de la manera que se muestra,
    // pero tendría que tener la misma firma. Si alguno de los tipos de datos cambia, tendríamos que
    // hacer los cambios en todos los lugares donde se hace la definición.
    let superman = {
        name: 'Clark',
        age: 60,
        powers: ['Volar'],
    };
})();
