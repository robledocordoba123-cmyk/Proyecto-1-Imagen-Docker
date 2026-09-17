const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// "Base de datos" en memoria
let products = [
  { id: 1, name: 'Teclado', price: 120000 },
  { id: 2, name: 'Mouse', price: 60000 },
];

// GET /products -> listar todos los productos
app.get('/products', (req, res) => {
  // TODO: devolver el arreglo "products" completo
});

// GET /products/:id -> obtener un producto por id
app.get('/products/:id', (req, res) => {
  // TODO: buscar el producto por id
  // Si no existe, responder 404
});

// POST /products -> crear un producto
app.post('/products', (req, res) => {
  // TODO: leer req.body (name, price), validar campos
  // Crear un nuevo id, agregarlo a "products" y responder 201
});

// PUT /products/:id -> actualizar un producto
app.put('/products/:id', (req, res) => {
  // TODO: buscar el producto por id
  // Si no existe, responder 404
  // Si existe, actualizar name/price y responder el producto actualizado
});

// DELETE /products/:id -> eliminar un producto
app.delete('/products/:id', (req, res) => {
  // TODO: buscar el producto por id
  // Si no existe, responder 404
  // Si existe, eliminarlo del arreglo y responder 204 (sin contenido)
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
