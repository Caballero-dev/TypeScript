// La idea del namespace es agrupar toda la lógica relacionada en un único espacio de nombres
// y exponer únicamente las funciones o variables que sean necesarias para su uso externo.

namespace Validations {

  // Función exportada la hace accesible desde fuera
  export const validateText= ( text: string ) => {
    return ( text.length > 3 ) ? true :  false;
  } 

  // Esta función no está exportada, por lo que solo es accesible dentro del namespace
  const validateDate = ( myDate: Date ): boolean => {
    return ( isNaN( myDate.valueOf() ) )
      ? false
      : true
  }

}

// Llama a la función validateText del namespace Validations y muestra el resultado en la consola
console.log( Validations.validateText('Dev') );
