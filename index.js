const express = require('express');
const router = require('./routes/job.js');

const app = express();

// Puerto del servidor
app.use(router)
const port = 3000;

app.listen(port, () => {
console.log(`Servidor iniciado en http://localhost:${port}`);
});