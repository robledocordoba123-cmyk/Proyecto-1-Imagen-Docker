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
  res.json(products);
});

// GET /products/:id -> obtener un producto por id
app.get('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json(product);
});

// POST /products -> crear un producto
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /products/:id -> actualizar un producto
app.put('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  const { name, price } = req.body;
  product.name = name;
  product.price = price;
  res.json(product);
});

// DELETE /products/:id -> eliminar un producto
app.delete('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  products.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
