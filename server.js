require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(error => console.error('Error conectando a MongoDB:', error));

app.get('/', (req, res) => {
  res.json({ message: 'API de Gametracker funcionando' });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Servidor ejecutándose en puerto ${process.env.PORT || 5000}`);
});