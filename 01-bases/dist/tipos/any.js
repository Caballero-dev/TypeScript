"use strict";
(() => {
    // El tipo 'any' permite que una variable acepte cualquier tipo de dato.
    // Sin embargo, al usar 'any', se pierde la validación de tipos y las ventajas de TypeScript.
    let avenger = 123;
    let exists;
    let power;
    // Una constante debe estar inicializada al momento de declararse.
    // De lo contrario, TypeScript marcará un error.
    // const exists;
    avenger = 'Dr Strange'; // Ahora 'avenger' es un string.
    // Cuando una variable tiene el tipo 'any', se pierde la funcionalidad de autocompletado.
    // Esto puede llevar a errores, como escribir mal el nombre de un método.
    // Por ejemplo, si escribimos 'chartAt' en lugar de 'charAt', TypeScript no detectará el error.
    // console.log(avenger.chartAt(0)); // Esto generaría un error en tiempo de ejecución.
    // console.log( avenger.charAt(0) ); // Esto esta bien
    // * Casting se refiere a convertir un valor de un tipo de dato a otro
    // Tratamos la variable como un string usando 'as string'
    // Esto no cambia el tipo real de la variable, pero le indica a TypeScript que la trate como un string.
    console.log(avenger.charAt(0).charAt(0));
    avenger = 123.12312312312; // Ahora `avenger` es un número.
    // Si intentamos usar un método de números sin casting, TypeScript no detectará errores.
    // console.log(avenger.toFiexed(2)); // Esto generaría un error en tiempo de ejecución.
    // console.log( avenger.toFixed(2) ); // Esto esta bien
    // Tratamos la variable como un número usando 'as string' o '<number>'
    // console.log( (<number>avenger).toFixed(2) );
    console.log(avenger.toFixed(2));
    // Ambas tienen el tipo 'any' y no están inicializadas, por lo que su valor será 'undefined'.
    console.log(exists);
    console.log(power);
    // El tipo 'any' debe evitarse siempre que sea posible, ya que elimina las ventajas de TypeScript,
    // como la validación de tipos y el autocompletado. Es mejor usar tipos específicos.
})();
