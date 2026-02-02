export const info = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación API AdoptMe',
            version: '0.0.1',
            description: 'API para la gestión de usuarios, mascotas y adopciones.'
        },
        servers: [
            {
                url: 'http://localhost:8080'
            }
        ]
    },
    apis: [`${process.cwd()}/src/docs/*.yml`] // Busca todos los archivos yml en docs
};