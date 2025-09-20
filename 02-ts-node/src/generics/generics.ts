// * Funciones genéricas en TypeScript
// Las funciones genéricas permiten trabajar con tipos de datos dinámicos, proporcionando flexibilidad
// y reutilización del código. Estas funciones pueden recibir y retornar cualquier tipo de dato,
// manteniendo la consistencia del tipo a lo largo de la función.


// * Función printObject
// Esta función recibe un argumento de cualquier tipo (any) y lo imprime en la consola.
// Usar any no es recomendable en TypeScript, ya que pierde las ventajas del tipado estático.
export const printObject = (argument: any): void => {
  console.log(argument);
};


// export function genericFunction( argument: any ) {
//   return argument;
// }

// * Función genérica `genericFunction`
// '<T>' se utiliza para definir un tipo genérico. 'T' es una convención común, pero puedes usar cualquier letra.
// Esta función recibe un argumento de tipo 'T' y retorna un valor del mismo tipo 'T'.
export function genericFunction<T>(argument: T): T {
  return argument;
}

// * Función genérica de flecha genericFunctionArrow
// Esta es una versión de la función genérica definida como una función de flecha.
export const genericFunctionArrow = <T>(argument: T): T => {
  return argument;
};
