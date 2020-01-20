# Proyecto TP - Alquilando

El objetivo de este TP es desarrollar las vistas de un simple ABM de usuarios conectado a una API externa.

## Demo
Se puede probar una demo en el siguiente enlace:
https://tp-alquilando.herokuapp.com/

## Instalación

Para la instalación de este programa se necesita de los siguientes requerimientos:

 - NodeJs 11.4.0+
 - NPM 6.4.1+
 -  Angular 8+


### Instalación de herramientas básicas

Para instalar NodeJs (En distribuciones de Debian y Downstreams como Ubuntu):

    $ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
    $ sudo apt-get install nodejs
    
  Se verifica la version de nodeJs y npm para verificar que se han instalado correctamente

    $ node --version
    $ npm --version
    
Ahora se procede a instalar Angular

    $ npm install -g @angular/cli
    
Finalmente, se procede a verificar que se instalo Angular correctamente

    $ ng --version

### Instalación y ejecución del programa

Para correr el programa se debe instalar todas sus dependencias, entonces en la raíz del proyecto

    $ npm install

Luego, proceder a la ejecución

    $ ng serve

# Créditos

 - Para este proyecto se utilizó como base el template gratuito
   **ngx-admin**, el cual es un admin template basado en Angular 8+ y Nebular, desarrollado por **Akveo Team**.
   https://github.com/akveo/ngx-admin/
   
 - Se usó reqres.in como simulación de una API externa.
 - También se usaron otras liberías como Bootstrap, JQuery, Dropify, entre otras.

