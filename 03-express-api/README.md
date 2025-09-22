# Usando librerías que no están escritas en TypeScript

Este proyecto demuestra cómo trabajar con librerías que no están escritas en TypeScript, utilizando **Express.js** como ejemplo para crear un servidor básico.

## Creación proyecto

Inicializa el proyecto con el siguiente comando:
```bash
npm init
```
Esto generará un archivo `package.json` para gestionar las dependencias del proyecto.

Crea un archivo de configuración de TypeScript (tsconfig.json) con el siguiente comando:
```bash
npx tsc --init
```


## Trabajar con librerías que no tienen soporte en TypeScript
Cuando trabajamos con librerías que no tienen soporte nativo para TypeScript, podemos usar archivos de definición de tipos (`.d.ts`). Estos archivos actúan como una interfaz que describe las estructuras y métodos disponibles en la librería.

Archivos de definición (`.d.ts`)
- Los archivos `.d.ts` permiten que TypeScript entienda las estructuras de las librerías que no están escritas en TypeScript.
- Si una librería no incluye sus propios tipos, puedes instalarlos desde npm con el prefijo @types.

Ejemplo:
```
npm install @types/express --save-dev
```

## Express js
Express.js es uno de los frameworks más populares para trabajar con Node.js. Permite crear rápidamente servidores web, REST APIs, y más.

Página oficial: https://expressjs.com/

Instalación de Express
- Instala Express como dependencia del proyecto:
  ```
  npm install express
  ```
- Instala los tipos de Express:
  ```
  npm install @types/express --save-dev
  ```

## Transpilar y ejecutar el proyecto

Transpila el código TypeScript a JavaScript:
```
tsc -W
```
Esto generará los archivos transpilados en la carpeta dist.

Ejecuta el servidor con Node.js:
```
node dist/index.js
```
