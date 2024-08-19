const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { randomUUID } = require('crypto');

const app = express();
const PORT = 3333;
let csrfToken = null;

app.use(cors());
app.use(bodyParser.json()); // Parsar JSON i inkommande förfrågningar
app.use(bodyParser.urlencoded({ extended: true })); // Parsar URL-kodade data
app.use(cookieParser()); // Parsar cookies från klienten

// Middleware för att generera CSRF-token och sätta den som en cookie
const generateCSRFToken = (req, res, next) => {
  csrfToken = randomUUID(); // Genererar en unik CSRF-token
  res.cookie('XSRF-TOKEN', csrfToken); // Sätter CSRF-token som en cookie
  req.csrfToken = csrfToken; // Lagrar CSRF-token i request-objektet
  console.log('generateCSRFToken', req.csrfToken); // Loggar CSRF-token för debugging
  next(); // Går vidare till nästa middleware
}

// Middleware för att validera CSRF-token
const validateCSRFToken = (req, res, next) => {
  if (csrfToken === req.headers['x-csrf-token']) { // Jämför CSRF-token från header med den lagrade token
    next(); // Token matchar, går vidare till nästa middleware
  } else {
    res.status(403).send('Invalid CSRF token'); // Token matchar inte, skickar felmeddelande
  }
}

// Endpoint för att få en ny CSRF-token
app.get('/api/csrf-token', generateCSRFToken, (req, res) => {
  res.json({ csrfToken: req.csrfToken }); // Returnerar den genererade CSRF-token till klienten
});

// Endpoint för att hantera POST-förfrågningar och validera CSRF-token
app.post('/api/fake-post', validateCSRFToken, (req, res) => {
  const { data } = req.body; // Extraherar data från POST-förfrågan
  // Simulerar en operation som utförs på backend
  console.log('Metod utförd på backend med data:', data); // Loggar data för debugging
  res.json({ message: 'Fejkad metod utförd på backend. Du skickade: ' + data }); // Returnerar ett svar till klienten
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
