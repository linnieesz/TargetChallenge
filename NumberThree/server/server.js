const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;


app.use(cors());

app.use(express.static('public'));  // Supondo que o seu arquivo faturamento.json esteja na pasta 'public'

app.listen(port, () => {
  console.log(`Servidor rodando na http://localhost:${port}`);
});
