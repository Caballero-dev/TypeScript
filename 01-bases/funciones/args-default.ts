(() => {

  // Cuando se coloca un parámetro con un valor por defecto, TypeScript lo considera como opcional.
  // Esto significa que no es obligatorio proporcionarlo al llamar la función.
  // Además, los parámetros con valores por defecto pueden colocarse después de parámetros opcionales.


  const fullName = ( firstName: string, lastName?: string, upper: boolean = false ): string => {
    if ( upper ) {
      return `${ firstName } ${ lastName || 'no lastname' }`.toUpperCase();
    } else {
      return `${ firstName } ${ lastName || 'no lastname' }`;
    }
  }

  const name = fullName('Tony', 'Stark', true);

  console.log({ name });

})()