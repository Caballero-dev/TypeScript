"use strict";
// en js es de esta forma qn que se importa la libreria
// const express = require('express')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// en ts es asi
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// definición del puerto
const port = 3000;
// la aplicación responde con un hello word cunado consulta la ruta raiz
app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.status(401).json({
        ok: false,
        msg: 'No hay token en la petición a'
    });
    // res.json({
    //   ok: true,
    //   msg: 'Hola dev'
    // })
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
