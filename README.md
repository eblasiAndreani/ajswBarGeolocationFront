## Instrucciones para Probar la Aplicación

Para probar esta aplicación, sigue los pasos a continuación:

1. **Obtención de Datos**

   - Asegúrate de que tengas [JSON Server](https://github.com/typicode/json-server) instalado en tu entorno de desarrollo. Si no lo tienes, puedes instalarlo globalmente ejecutando el siguiente comando:

     ```
     npm install -g json-server
     ```

   - Después, abre una terminal y navega al directorio raíz de la aplicación.

   - Para obtener los datos necesarios, ejecuta el siguiente comando:

     ```
     json-server --watch src/Data/db.json --port 3001
     ```

   Esto iniciará un servidor JSON que proporcionará los datos simulados para la aplicación.

2. **Levantar la Aplicación**

   - Una vez que el servidor JSON esté en funcionamiento, abre una nueva terminal.

   - Navega al directorio raíz de la aplicación si no lo has hecho ya.

   - Para iniciar la aplicación, ejecuta el siguiente comando:

     ```
     npm start
     ```

   Esto lanzará la aplicación y estará disponible en tu navegador web.

3. **Acceso a la Aplicación**
   - Abre tu navegador web y navega a la dirección predeterminada: `http://localhost:3000` (o la dirección que se muestre en tu terminal si se ha configurado de manera diferente).

Ahora podrás explorar y probar la aplicación en tu entorno local. Asegúrate de que el servidor JSON esté en ejecución cada vez que quieras utilizar la aplicación, ya que los datos necesarios se obtienen de él.
