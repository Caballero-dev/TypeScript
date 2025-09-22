// * Importación de la librería Express
// En JavaScript se utiliza require para importar módulos
// const express = require('express')

// En TypeScript, usamos import para aprovechar las ventajas de los tipos y el soporte de ES Modules.
import express from 'express';

// * Creación de la aplicación de Express
const app = express();

// * Definición del puerto
// Aquí definimos el puerto en el que la aplicación escuchará las solicitudes HTTP
const port = 3000;

// * Ruta raíz ('/')
// La aplicación responde a las solicitudes GET realizadas a la ruta raíz ('/')
app.get('/', (req, res) => {
  // * Ejemplo de respuesta con un error 401
  // En este caso, se responde con un estado HTTP 401 (No autorizado) y un objeto JSON
  // que indica que no hay un token en la petición
  res.status(401).json({
    ok: false, // Indica que la operación no fue exitosa
    msg: 'No hay token en la petición a' // Mensaje de error
  });

  // * Ejemplo alternativo de respuesta exitosa
  // Si se descomenta este bloque, la aplicación responderá con un estado HTTP 200 (OK)
  // y un objeto JSON indicando que la operación fue exitosa
  // res.json({
  //   ok: true,
  //   msg: 'Hola dev'
  // });
});

// * Inicio del servidor
// La aplicación comienza a escuchar en el puerto definido anteriormente
// Cuando el servidor está listo, se imprime un mensaje en la consola indicando el puerto
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});