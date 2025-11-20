const express = require('express');
const app = express();

// Lataa vitsit JSON-tiedostosta
const jokes = require('./index.json');

// Root endpoint
app.get('/', (req, res) => {
  res.send('Tervetuloa päivitettyyn Jokes API:in! Käytä /jokes, /jokes/random tai /jokes/count');
});

// Kaikki vitsit
app.get('/jokes', (req, res) => {
  res.json(jokes);
});

// Satunnainen vitsi
app.get('/jokes/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
});

// UUSI: vitsien määrä
app.get('/jokes/count', (req, res) => {
  res.json({ count: jokes.length });
});

// Render / local server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
