# Markdown Links

## Introducción

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio.

Estos archivos `Markdown` normalmente contienen _links_ que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## Objetivos del proyecto 

Este proyecto se hizo con la finalidad de poder verificar los _links_ que se encuentran de cualquier archivo que tenga la extención `.md`.

## Historias de usuario 

1. El usuario necesita poder instalar la librería con un npm install.
2. El usuario necesita las opciones de validate y state para poder visualizar sus links funcionales.
3. 

## Diagrama de flujo general 

![Diagrama-de-flujo](https://drive.google.com/file/d/18OOfbQs83IBP_bCaDhXFLbmQk0cEopd1/view?usp=sharing)

## Definición del usuario

El usuario es cualquier otro programador que necesite verificar sus _links_ por medio de una librería.

## Consideraciones generales

La librería esta implementada en JavaScript para ser ejecutada con
Node.js.

<!-- ### Archivos del proyecto

- `README.md` con descripción del módulo, instrucciones de instalación/uso,
  documentación del API y ejemplos. Todo lo relevante para que cualquier
  developer que quiera usar tu librería pueda hacerlo sin inconvenientes.
- `index.js`: Desde este archivo debes exportar una función (`mdLinks`).
- `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...)
- `.editorconfig` con configuración para editores de texto.
- `.eslintrc` con configuración para linter.
- `.gitignore` para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).
- `test/md-links.spec.js` debe contener los tests unitarios para la función
  `mdLinks()`. Tu implementación debe pasar estos test. -->