(() => {

  const hero: string = 'Iroman';

  // Función que retorna el nombre del héroe.
  // El tipo de retorno se especifica explícitamente como 'string'.
  function returnName(): string {
    return hero;
  }

  // Declaración de una función de flecha que retorna un mensaje.
  // El tipo de retorno se especifica explícitamente como 'string'.
  const activateBatiSignal = (): string => {
    return 'Bati señal activada';
  }

  console.log( typeof activateBatiSignal );
  
  // TypeScript infiere automáticamente que la función 'returnName' retorna un valor de tipo 'string'.
  // Esto se debe a que el tipo de retorno de 'returnName' ya está definido como`'string'.
  const heroName = returnName(); // `heroName` será de tipo `string`.

})()