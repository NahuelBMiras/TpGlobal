
![Logo](https://raw.githubusercontent.com/NahuelBMiras/TpGlobal/Nahuel/public/img/usar_logo.png)


# 🎂 Mi Rincón de Recetas🍞

Este proyecto tiene como objetivo crear una página en la cual puedas encontrar la receta justa para aquello que tienes ganas. Si quieres algo salado, te dará recetas saladas. Si quieres algo con manzana y que no sea postre, te dará otra receta.


El mecanismo para conseguir esto sigue en proceso de desarrollo, pero es nuestro objetivo.


# 🥞 Dentro van a poder encontrar:

- ## 🍕 Página de inicio:
  - Desde esta van a poder acceder a la página de recetas (nav recetas) y al login (icono de usuario).
  - Encontrarás un carrusel con recetas.
  - Algunas recetas que te podrían gustar.

- ## 🥣 Página de Recetas:
  - Aquí van a encontrar las recetas que tenemos por el momento. Si el usuario no quiere hacerlo de la manera en que nosotros se lo proponemos, puede buscar una receta él mismo desde aquí.
  - También, desde aquí, al hacer clic en una de las recetas, irán a la receta elegida. Aquí implementamos el uso del localStorage: al hacer clic, esto almacena en el localStorage la receta elegida y luego esta es buscada en un array de objetos para comenzar a renderizar toda la página.

- ## 🍗 Receta:
  - Como explicamos anteriormente, esta se genera según lo almacenado en el localStorage. Por el momento, tenemos 11 recetas a las que pueden acceder.
  - Dentro encontrarán los ingredientes, la receta, una imagen de esta, el paso a paso de la receta, un video y unas recetas que podrían gustarte. Estas son según características guardadas en el array anterior; si haces clic, te cargan la página con los nuevos valores.
  - También hay botones de compartir, imprimir y guardar. Por el momento no tienen una funcionalidad.

- ## 🍪 Login
  - Aquí el usuario va a poder registrarse.


- ## Link a nustro deploy:
  - https://master--melodic-rabanadas-8af3d3.netlify.app/



## 🛠 Tecnologías Utilizadas:
Las tecnologías usadas en este proyecto son: JavaScript, HTML, CSS y Astro.
