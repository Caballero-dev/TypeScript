(()=> {

  // El tipo 'never' indica que una función nunca debe terminar correctamente.
  // Esto significa que la función:
  // - Lanza un error (throw).
  // - Entra en un bucle infinito.
  // - Nunca alcanza un punto final ejecutable.

  // const error = (msg: string): never => {
  //   throw new Error(msg);
  // }

  // En este caso, la función puede retornar un valor de tipo 'never' o 'number'.
  // Esto significa que:
  // - Si se lanza un error, el tipo será 'never'.
  // - Si no se lanza un error, la función puede retornar un número.
  const error = (msg: string): never | number => {
    if (false) {
      throw new Error(msg);
    }
    return 1;
  };

  error('AAAAAA!!!');

  console.log( 'Hola Mundo' );
  

})()