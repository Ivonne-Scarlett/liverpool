a) Pasos para ejecutar el repositorio en local:
1.- Instale Node.js y npm desde https://nodejs.org 
2.- Clone el código fuente del proyecto Next.js desde https://github.com/Ivonne-Scarlett/liverpool.git
3.- Instale todos los paquetes npm necesarios ejecutando 'npm install' o 'npm i' desde la línea de comando 
en la carpeta raíz del proyecto (donde se encuentra el paquete.json).
4.- Inicie la aplicación con el comando 'npm run dev' desde la línea de comando en la carpeta raíz del proyecto, 
esto compilará la aplicación e iniciará el servidor Next.js.
5.- Una vez que reciba el mensaje succesfull abra la aplicación en la URL http://localhost:3000.

b) Paquetes utilizados:
1.- npm install -D tailwindcss postcss autoprefixer
2.- npm install classnames
3.- npm install firebase
4.- npm install react-firebase-hooks

c) Contiene las siguientes rutas/puntos finales:
/                 pagina principal, se muestran 12 productos
/product/[id]     detalle de productos
404               page not found

d)Estructura del proyecto:
El proyecto está organizado en las siguientes carpetas/archivos:
• Componentes: usados ​​por páginas o por otros componentes. Los componentes globales están en la carpeta raíz '/components' 
• Páginas: Visualización del contenido. La carpeta '/pages' contiene todas las páginas enrutadas con la ruta a cada página 
definida por su nombre de archivo.
• lib : contiene la conexión con la API RickandMorty. En el archivo 'api.js'
• img : contiene todas las imégenes usadas en la aplicación web. Se encuentran dentro de la carpeta '/public'.
• icon : contiene todo los iconos usados en en la aplicación web. Se encuentran dentro de la carpeta '/public'.
• colores base: se configuraron los colores básicos en el archivo 'tailwind.config.js'

