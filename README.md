# Proyecto 1 — Imagen Docker

API REST de productos (Node.js + Express) empaquetada en una imagen Docker propia.

## Descripción

Una tienda virtual necesita exponer una API REST de productos que pueda ejecutarse en cualquier computador sin instalar Node.js. Esta solución empaqueta la API en una imagen Docker propia (`tienda-api:1.0`), construida sobre `node:20-alpine`, con los datos de productos almacenados en memoria y cinco endpoints CRUD.

## Requisitos

- Docker

## Instrucciones de ejecución

1. Clonar el repositorio.
2. Construir la imagen:
   ```
   docker build -t tienda-api:1.0 .
   ```
3. Ejecutar el contenedor en segundo plano, publicado en el puerto 3000:
   ```
   docker run -d --name tienda-api -p 3000:3000 tienda-api:1.0
   ```
4. Verificar que está corriendo:
   ```
   docker ps
   ```
5. Ver los logs:
   ```
   docker logs tienda-api
   ```
6. Detener y eliminar el contenedor:
   ```
   docker stop tienda-api
   docker rm tienda-api
   ```

## Endpoints

| Método | Ruta              | Descripción                  |
|--------|-------------------|-------------------------------|
| GET    | /products         | Listar todos los productos    |
| GET    | /products/:id     | Obtener un producto por id    |
| POST   | /products         | Crear un producto             |
| PUT    | /products/:id     | Actualizar un producto        |
| DELETE | /products/:id     | Eliminar un producto          |

Ejemplo de creación:
```
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d "{\"name\":\"Monitor\",\"price\":500000}"
```

## CI/CD

El repositorio incluye un workflow de GitHub Actions (`.github/workflows/ci.yml`) que instala las dependencias y construye la imagen Docker automáticamente en cada `push` o `pull request` a `main`.

## Evidencias

- Captura de `docker ps` mostrando el contenedor `tienda-api` en ejecución.
- Capturas de las respuestas de los 5 endpoints (`GET`, `GET/:id`, `POST`, `PUT`, `DELETE`).
- Captura de `docker logs tienda-api`.
- Captura del workflow de GitHub Actions ejecutado correctamente.
