"use strict";
(() => {
    // El uso de las enumeraciones (enums) ayuda a trabajar con valores que tienen un sentido semántico,
    // haciéndolos más fáciles de leer y entender en el código.
    // Los enums permiten asignar nombres descriptivos a un conjunto de valores relacionados.
    // Para los nombres de las enumeraciones se recomienda usar UpperCamelCase.
    // enum AudioLevel {
    //   min,    // Por defecto, el valor es 0
    //   medium, // Por defecto, el valor es 1
    //   max     // Por defecto, el valor es 2
    // }
    // Asignación de valores personalizados a un enum:
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    // Declaración de una variable de tipo `AudioLevel`.
    // let currentAudio: AudioLevel = AudioLevel.medium;
    // Dado que los valores de un enum son números, TypeScript permite asignar un número directamente a 
    // una variable de tipo enum, pero TypeScript no puede validar si ese número corresponde a un valor definido en el enum
    // Esto puede llevar a errores semánticos, ya que el propósito de los enums es proporcionar nombres descriptivos en lugar 
    // de usar números arbitrarios
    let currentAudio = 10;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
