const express = require('express');
require('./socket')
require('./helper/cron')

const rolRouter = require('./routes/rol.route');
const userRouter = require('./routes/user.route');
const companyRouter = require('./routes/company.route')
const permissionRouter = require('./routes/permission.router')
const processRouter = require('./routes/process.route')
const jobRouter = require('./routes/job.route')

const app = express();
// Se carga librerias en la aplicacion
app.use(express.json()); // Analiza los cuerpos de las solicitudes con formato JSON
app.use(express.urlencoded({ extended: true })); // Analiza los cuerpos de las solicitudes codificadas en URL

// Crear el router principal
const apiRouter = express.Router();
app.use('/api', apiRouter);

// Agregar los routers a este router principal
apiRouter.use('/rol', rolRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/company', companyRouter);
apiRouter.use('/permission', permissionRouter)
apiRouter.use('/process', processRouter)
apiRouter.use('/job', jobRouter)

// Puerto del servidor
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});