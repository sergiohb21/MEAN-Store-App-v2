# Proyecto MEAN-STORE-APP

Este proyecto consiste en una aplicación web dividida en dos partes: Cliente y Servidor.

## Montar el entorno de desarrollo

### Cliente

1. **Instalación de dependencias:** Navega hasta la carpeta Cliente y ejecuta el siguiente comando para instalar las dependencias necesarias:

    ```bash
    cd Cliente
    npm install
    ```

2. **Ejecutar el servidor de desarrollo:** Una vez instaladas las dependencias, inicia el servidor de desarrollo de Angular con el siguiente comando:

    ```bash
    ng serve
    ```

    🚀 La aplicación Angular estará disponible en [http://localhost:4200/](http://localhost:4200/).

### Servidor

1. **Instalación de dependencias:** Dirígete a la carpeta Servidor/nodejs y ejecuta el siguiente comando para instalar las dependencias del servidor:

    ```bash
    cd Servidor/nodejs
    npm install
    ```

2. **Construcción de la imagen Docker (solo la primera vez):** Regresa a la carpeta Servidor y ejecuta el siguiente comando para construir la imagen Docker:

    ```bash
    cd ../
    docker-compose build
    ```

3. **Levantar los contenedores Docker:** Una vez construida la imagen, inicia los contenedores Docker con el siguiente comando:

    ```bash
    docker-compose up
    ```

    🐳 Mongo Express estará disponible en [http://localhost:8082/](http://localhost:8082/) con las credenciales de administrador "admin:pass".

## Información adicional

- 🌐 La aplicación Angular corre en [http://localhost:4200/](http://localhost:4200/).
- 🛠️ Mongo Express está disponible en [http://localhost:8082/](http://localhost:8082/) con las credenciales de administrador "admin:pass".
