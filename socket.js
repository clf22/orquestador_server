const portSocket = 3001
const Job = require('./class/job.class');
const Process = require('./class/process.class')

const io = require('socket.io')(portSocket);
console.log(`Servidor socket.io iniciado en ${portSocket}`);

io.on('connection', socket => {
  console.log(` New Connection ${socket.id}`);
  socket.emit('checkProcess', () => {})
  socket.on('infoProcess', async data => {
    try {
      let stopJobs = false
      let idProcess = null
      for(let proc of data) {
        switch (proc.type) {
          case 'process':
            let processItem = await Process.get({name: proc.name})
            if(processItem.length === 0) {
              try {
                let [item, created] = await Process.create({name: proc.name})
                idProcess = item.id
                if(created) stopJobs = true
              } catch (error) {
                for(let process of data) {
                  if(proc.name === process.name) continue
                  await desconectar({socket, process})
                }
                desconectar({socket, process: proc})
                break
              }
            } else {
              idProcess = processItem[0].id
              await processItem[0].update({ idSocket: socket.id })
            }
            break;
          case 'job':
            let [job, created] = await Job.create({name: proc.name, idProcess})
            if(stopJobs || created) desconectar({socket, process: job})
            if(proc.status !== 'online') job.update({ active: false }) 
            break;
          default:
            desconectar({socket, process: proc})
            break;
        }
      }
    } catch (error) {
      console.error(error);
    }
  })
  
  socket.emit('checkProcessResources')
  socket.on('infoProcessResources', async data => {
    console.log(data);
  })

  socket.on('disconnect', () => {
    console.log(`Hasta luego ${socket.id}`);
  })
})

function desconectar({socket, process}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      socket.emit('logOut', process.name)
      resolve()
    }, 1000);
  })
}

module.exports = io