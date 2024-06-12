const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3333;

/*
  CORS middleware. Se: https://expressjs.com/en/resources/middleware/cors.html 
*/

// Lista över tillåtna domäner för DELETE-förfrågningar
const allowedDeleteDomains = ['http://10.60.84.28:5173'];

const corsOptions = (req, callback) => {
  let options = {
    origin: '*', // Tillåt alla domäner som standard
    methods: ['GET', 'POST'], // Tillåt endast GET och POST metoder som standard
    allowedHeaders: ['Content-Type', 'Authorization'], // Specificera tillåtna headers
    credentials: true // Tillåt att credentials skickas med förfrågan
  };

  const origin = req.header('Origin');

  // Hantera DELETE-metoden separat
  if (req.method === 'DELETE' || req.method === 'OPTIONS') {
    if (allowedDeleteDomains.includes(origin)) {
      options.origin = origin; // Tillåt specifika domäner för DELETE
      options.methods.push('DELETE'); // Lägg till DELETE som tillåten metod
    } else {
      options.origin = false; // Blockera DELETE för andra domäner
    }
  }

  // För requests med OPTIONS-metoden (preflight), tillåt alltid metoder och headers
  if (req.method === 'OPTIONS') {
    options.methods = ['GET', 'POST', 'DELETE'];
    options.allowedHeaders = ['Content-Type', 'Authorization'];
    options.credentials = true;
  }

  callback(null, options); // Skicka tillbaka konfade alternativ
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// data som skickas i endpoint nedan
const data = {
  message: 'Hello World!'
};

// REST API endpoint, faller under CORS policyn för app.use() är för alla
// funktioner utan konfiguration som säger vilken/vilka eller metoder..
app.get('/api/data', (req, res) => {
  res.json(data);
});

app.post('/api/post', (req, res) => {
  const { test } = req.body;
  console.log('test', test);
  res.json('POST kördes! Du skickade: ' + test);
});

app.delete('/api/delete', (req, res) => {
  res.json('DELETE kördes! Inget togs bort men endpointen nåddes trots CORS');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
