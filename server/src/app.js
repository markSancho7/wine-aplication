const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

const { corsOptions } = require('./config/cors.config');
const mongoose = require('mongoose');

const usersRoutes = require('./routes/users.routes');
const winesRoutes = require('./routes/wines.routes');
const authRoutes = require('./routes/auth.routes');
const opinionsRoutes = require('./routes/opinions.routes');

require('dotenv').config();
// Rutas

// Middlewares para cliente
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
// app.use(fileUpload());

// Uso de rutas
app.use('/api/wines', winesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/opinions', opinionsRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.DATABASE}`
    );
    console.log('Connected to database');
    app.listen(3000, () =>
      console.log('Servidor en ejecución en el puerto 3000')
    );
  } catch (err) {
    console.log('Connection error', err);
  }
};
startServer();
