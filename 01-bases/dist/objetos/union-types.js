"use strict";
(() => {
    // Puede almacenar un valor de tipo 'string', 'number' o un objeto del tipo 'Hero'.
    let myCustomVariable = 'Lalo';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Peter',
        age: 18,
        powers: ['Telaraña']
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
