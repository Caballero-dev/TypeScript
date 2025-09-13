# Bases


## Instalación de TypeScript

Para instalar TypeScript de forma global en tu computadora, utiliza el siguiente comando:

```bash
npm install -g typescript
```

## Transpilar TypeScript a JavaScript

Cuando escribimos código en TypeScript (archivos con extensión `.ts`), los navegadores no pueden interpretarlo directamente. Por lo tanto, es necesario transpilar el código TypeScript a JavaScript utilizando el siguiente comando:

```bash
tsc app.ts
```

Esto generará un archivo `.js` a partir del archivo `.ts`. Por ejemplo:

- Código TypeScript: [app.ts](app.ts)
- Código JavaScript generado: [app.js](app.js)

## Archivo de configuración de TypeScript

El comando `tsc --init` crea un archivo de configuración llamado `tsconfig.json`. Este archivo permite personalizar y configurar el comportamiento del compilador de TypeScript.

## Modo Observador

TypeScript incluye un modo observador que permite monitorear los cambios en los archivos `.ts` y transpilar automáticamente el código a JavaScript. Para activar este modo, utiliza el siguiente comando:

```bash
tsc --watch
```

Esto es útil para trabajar de manera más eficiente, ya que no es necesario ejecutar manualmente el comando `tsc` cada vez que se realiza un cambio.
