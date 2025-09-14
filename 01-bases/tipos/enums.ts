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
  enum AudioLevel {
    min = 1,
    medium, // Si no se asigna un valor, TypeScript lo incrementa automáticamente (medium = 2) 
    max = 10
  }

  // Declaración de una variable de tipo `AudioLevel`.
  // let currentAudio: AudioLevel = AudioLevel.medium;

  // Dado que los valores de un enum son números, TypeScript permite asignar un número directamente a 
  // una variable de tipo enum, pero TypeScript no puede validar si ese número corresponde a un valor definido en el enum
  // Esto puede llevar a errores semánticos, ya que el propósito de los enums es proporcionar nombres descriptivos en lugar 
  // de usar números arbitrarios
  let currentAudio: AudioLevel = 10;

  console.log( currentAudio );

  console.log( AudioLevel );


})()