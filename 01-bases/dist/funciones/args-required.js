"use strict";
(() => {
    // Es recomendable evitar el uso del tipo 'any' o no tipar los parámetros,
    // ya que esto elimina las ventajas de TypeScript, como la validación de tipos y el autocompletado.
    // Cuando los parámetros se definen con un tipo explícito, estos se vuelven obligatorios.
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    // Si los argumentos son requeridos, no podemos omitirlos al llamar la función.
    // Además, los valores enviados deben coincidir con los tipos definidos.
    const name = fullName('Tony', 'Stark');
    // Ejemplo con el uso de 'any':
    // Aquí 'noName' tiene el tipo 'any', lo que permite que se pase como argumento,
    // pero elimina las ventajas de TypeScript, como la validación de tipos.
    // let noName: any;
    // const name = fullName(noName, 'Stark')
    // Ejemplo con 'undefined':
    // Si 'noName' no tiene un valor asignado y su tipo es 'string', TypeScript permitirá que se pase como argumento,
    // pero el resultado será 'undefined' concatenado con el segundo argumento.
    // let noName: string;
    // const name = fullName(noName, 'Stark');
    console.log({ name });
})();
