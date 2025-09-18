(()=> {

  type Avenger = {
    name: string;
    weapon: string;
  }

  const ironman: Avenger = {
    name: 'Ironman',
    weapon: 'Armorsuit'
  }

  const capitanAmerica: Avenger = {
    name: 'Capitán America',
    weapon: 'Escudo'
  }
  const thor: Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir'
  }

  const avengers:Avenger[] = [ ironman, thor, capitanAmerica];

  // * Uso del ciclo 'for...of'
  // El ciclo 'for...of' es una forma más sencilla y legible de iterar sobre arreglos en comparación con un ciclo 'for' tradicional.
  // En este caso, se utiliza para recorrer el arreglo 'avengers' y desestructurar las propiedades 'name' y 'weapon' de cada objeto.
  for (const { name, weapon } of avengers) {
    console.log(name, weapon);
  }


  
})()