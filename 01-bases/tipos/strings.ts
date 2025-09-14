(() => {

  // Existen tres formas principales de definir cadenas de texto (strings) en TypeScript:
  // 1. Usando comillas simples (' ')
  // 2. Usando comillas dobles (" ")
  // 3. Usando backticks (` `)
  const batman: string = 'Batman';
  const linternaVerde: string = "Heroe: Linterna Verde";
  const iroman: string = `Iroman`;

  // Declaración de una variable numérica para demostrar la conversión a string
  const a = 123;

  // Uso de backticks para crear una plantilla literal:
  // - Permiten incluir expresiones dentro de la cadena usando ${}.
  // - No es necesario escapar caracteres como el apóstrofe (').
  // - Si se incluye un número, TypeScript llama automáticamente al método 'toString()' para convertirlo a string.
  console.log(`I'm ${iroman}, ${a}`);

  // Cuando se tipa una variable como `string`, TypeScript proporciona todas las funciones disponibles para cadenas.
  console.log( batman.toUpperCase() );

  // Aunque TypeScript ofrece funcionalidades avanzadas, no evita errores en tiempo de ejecución.
  // Por ejemplo, intentar acceder a un índice fuera de rango en una cadena
  // console.log(batman[10].toUpperCase());

  // Uso del operador de encadenamiento opcional ( ?. ) para evitar errores:
  // - Si el índice existe, se ejecuta el método 'toUpperCase()'.
  // - Si el índice no existe (es undefined), el operador devuelve undefined y evita el error.
  // - El operador '||' se usa para proporcionar un valor por defecto si el resultado es 'undefined'.
  console.log(batman[10]?.toUpperCase() || 'No está presente');  

})()