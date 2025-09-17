(() => {

  // Este tipo describe la estructura de un objeto que representa a los Avengers.
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  }

  const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Betanny',
    activo: true,
    poder: 1500.898989865,
  }


  // * Desestructuración en TypeScript
  // La desestructuración es una característica de ES6 que permite extraer propiedades de un objeto
  // y asignarlas a variables de manera más sencilla.

  // Extraemos las propiedades 'poder' e 'ironman' del objeto 'avengers'.
  // const { poder, ironman } = avengers;

  // Al desestructurar, TypeScript reconoce los tipos de las propiedades y ofrece autocompletado.
  // console.log(poder.toFixed(2), ironman.toUpperCase());
  
  // Declaración de una función que utiliza desestructuración en sus parámetros.
  // - Extrae la propiedad 'ironman' del objeto 'Avengers'.
  // - Usa el operador REST ('...') para capturar el resto de las propiedades en un nuevo objeto llamado 'resto'.
  const printAvenger = ({ ironman, ...resto }: Avengers): void => {
    console.log(ironman, resto); // Imprime el valor de `ironman` y el resto de las propiedades.
  };

  // printAvenger(avengers);
  

  // * Desestructuración de arreglos
  // La desestructuración también funciona con arreglos, permitiendo extraer elementos por posición.
  const avengersArr: string[] = ['Cap. América', 'ironman', 'Hulk'];

  // Forma tradicional de acceder a un elemento del arreglo
  // const ironman = avengersArr[1];

  // Desestructuración de arreglos, extraemos los elementos del arreglo 'avengersArr' y los asignamos a variables.
  const [ capi, ironman, ] = avengersArr;

  console.log({ ironman, capi });
  
  // * Nota:
  // La desestructuración funciona mejor cuando los tipos están definidos, ya que TypeScript puede validar
  // y ofrecer autocompletado para las propiedades o elementos desestructurados.

})()