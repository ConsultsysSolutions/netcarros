const express = require('express');
const app = express();

app.get('./index.html');

const port = 5000;

app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`));
