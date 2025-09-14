"use strict";
(() => {
    // La palabra clave 'void' se utiliza para indicar que una función no devuelve ningún valor.
    // Si se intenta retornar un valor en una función con tipo de retorno 'void', TypeScript marcará un error.
    function callBatman() {
        // No válido: TypeScript marcará un error porque la función tiene tipo 'void'.
        // return 10;
        // Válido: Una función con tipo 'void' puede no retornar nada.
        return;
    }
    // Declaración de una función de flecha con tipo de retorno 'void'
    const callIroman = () => {
        // Válido: No retorna ningún valor.
        return;
    };
    // Si una función no tiene un valor de retorno explícito, TypeScript asume que su tipo de retorno es 'void'.
    // El tipo 'void' le indica a TypeScript que no hay un valor de retorno.
    const a = callBatman();
    console.log(a);
})();
