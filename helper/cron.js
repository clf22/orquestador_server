const cron = require('node-cron');
const io = require('../socket')

// Función que se ejecutará cada 10 segundos
function miFuncion() {
  for(let socket of io.sockets.sockets) {
    //console.log(`Se consulta recursos de ${socket[0]}`);
    io.to(socket[0]).emit('checkProcessResources')
  }
}

// Configuración del cron para que se ejecute cada 10 segundos
const job = cron.schedule('*/30 * * * * *', miFuncion);

// Iniciar el cron
job.start();
