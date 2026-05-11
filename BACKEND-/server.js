const express = require('express');
const session = require('express-session');
const cors = require('cors');
const sequelize = require('./config/database');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(session({
  secret: 'exam-secret',
  resave: false,
  saveUninitialized: false
}));

app.get('/', (req, res) => {
  res.json({ message: "API CinéDélices fonctionne" });
});

// Synchronisation BDD
sequelize.sync().then(() => {
  console.log("Base de données connectée");
  app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
  });
});