(() => {
  // * Uso de 'var'
  // 'var' es una forma antigua de declarar variables en JavaScript.
  // Su uso no es recomendado en TypeScript o ES6+ debido a problemas como:
  // - Hoisting: Las variables declaradas con 'var' se "elevan" al inicio del contexto, lo que puede causar comportamientos inesperados.
  // - Ámbito de función 'var' no respeta el ámbito de bloque, lo que puede generar errores en estructuras como bucles o condicionales.
  // Solo se recomienda usar 'var' en casos extremos donde se necesite compatibilidad con navegadores muy antiguos.


  // Ejemplo de hoisting con 'var':
  // Este código es válido, pero puede ser confuso:
  // console.log(a); // Salida: undefined (la declaración de 'var a' se eleva, pero no su inicialización)
  // var a = 'Lalo';

  // * Uso de 'let' y 'const'
  // 'let' y 'const' son las formas modernas de declarar variables en ES6+.
  // - let Permite declarar variables que pueden ser reasignadas.
  // - const Permite declarar constantes cuyo valor no puede ser reasignado.
  // Ambas respetan el ámbito de bloque y no permiten el uso de variables antes de su declaración.
  let nombre: string = 'lalo';
  // console.log( nombre );

  // * Reasignación de funciones
  // En JavaScript, es posible sobrescribir una función declarada previamente.
  // function getName() {
  //   console.log('viejo getName');
  // }
  // getName = () => { console.log('nuevo getName'); } // Esto sobrescribe la función anterior.
  
  // * Uso de 'const' para evitar sobrescritura
  // Si declaramos una función con 'const', no se puede sobrescribir.
  const getName = (): void => {
    console.log('viejo getName');
  };

  // Intentar sobrescribir una función declarada con 'const' generará un error:
  // getName = () => { console.log('nuevo getName'); };

  // getName()

})()