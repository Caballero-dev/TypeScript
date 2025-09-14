(() => {

  // Para indicar que un parámetro sea opcional, debemos colocar '?' después del nombre del parámetro.
  // Esto le dice a TypeScript que el parámetro puede o no ser proporcionado al llamar la función.

  // Nota importante:
  // - Los parámetros opcionales siempre deben ir después de los parámetros obligatorios.
  // - Si un parámetro opcional se coloca antes de un parámetro obligatorio, TypeScript marcará un error.


  // Declaración de una función con un parámetro opcional 'lastName'
  const fullName = ( firstName: string, lastName?: string ): string => {
    // Si 'lastName' no se proporciona, se usará el valor por defecto 'no lastname'
    return `${ firstName } ${ lastName || 'no lastname' }`;
  }

  // Llamada a la función 'fullName' solo con el parámetro obligatorio 'firstName'
  const name = fullName('Tony');

  console.log({ name });

})()