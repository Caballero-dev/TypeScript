"use strict";
(() => {
    // El argumento 'rest' permite capturar un número indefinido de argumentos
    // y almacenarlos en un arreglo. Esto es útil cuando no sabemos cuántos argumentos adicionales
    // se pasarán a la función.
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')} `;
    };
    // Llamada a la función 'fullName' con un argumento obligatorio y varios argumentos adicionales.
    const superman = fullName('Clark', 'Joseph', 'Kent', 'dev');
    console.log({ superman });
})();
