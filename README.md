AdoptMe API - Entrega Final Backend III
- Esta API está desarrollada con Node.js, Express y MongoDB.

Características
- Documentación interactiva: Swagger integrado.
- Testing: Pruebas funcionales con test runner nativo de Node.js.
- Dockerización: Imagen lista para ser desplegada en cualquier entorno.
- Mocking: Generación de datos de prueba para usuarios y mascotas.

🛠️ Instalación y Uso
Opción 1: Docker (Recomendado)
No necesitás instalar dependencias locales, solo tener Docker corriendo.

Si ejecutás por consola, seguí los siguientes pasos:
- Descargar la imagen: docker pull mrumeaux/api-76870
- Ejecutar el contenedor: docker run -p 8080:8080 mrumeaux/api-76870
- Acceder: Abrí http://localhost:puerto-que-elijas(por-defecto-8080)/apidocs en algún navegador.

Opción 2: Instalación Local
- Cloná el repositorio.
- Instalá las dependencias: npm install.
- Configurá tu archivo .env con la MONGO_URL.

Para iniciar la app (desde la ruta donde pegues los archivos): node app.js

🧪 Testing

Para correr los tests: --> Consola: node --test

📖 Documentación de la API
La documentación detallada de los endpoints (Usuarios, Mascotas y Adopciones) se encuentra disponible vía Swagger UI.

URL: http://localhost:puerto-que-elijas(por-defecto-8080)/apidocs

🐳 Estructura de Docker
El proyecto incluye un Dockerfile optimizado utilizando la versión más reciente de node para reducir el tamaño de la imagen y mejorar el tiempo de despliegue.
