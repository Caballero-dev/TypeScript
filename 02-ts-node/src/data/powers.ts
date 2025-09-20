
// * Exportación independiente
// La exportación independiente permite exportar múltiples elementos de un archivo.
// En este caso, se exporta la interfaz Power para que pueda ser utilizada en otros archivos.
export interface Power {
  id: number;
  desc: string
}

const powers: Power[] = [
  {
    id: 1,
    desc: 'Money',
  },
  {
    id: 2,
    desc: 'Drugs',
  },
];

// * Exportación por defecto
// La exportación por defecto permite exportar un único elemento principal de un archivo.
// En este caso, se exporta el arreglo powers como el valor predeterminado del archivo.
// Esto significa que al importar este archivo, se obtendrá directamente el arreglo powers.
export default powers;