// Node Modules
const express = require('express');

// Application
const app = express();

// Definindo algumas rotas
app.get('/about', (req, res) => {
  res.send('about');
});

app.get('contact', (req, res) => {
  res.send('contact');
});

// Subindo servidor
app.listen(3000, () => {
  console.log("Aplicação rodando na porta 3000");
})