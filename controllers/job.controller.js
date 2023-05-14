const Job = require("../class/job.class")
const io = require('../socket')


const jobCtrl = {}

jobCtrl.create = async (req, res) => {
  try {
    let { name, active, config, idProcess } = req.body
    let [newUser, created] = await Job.create({name, active, config, idProcess})
    if(!created) newUser.update({visible:1})
    res.status(200).send(newUser)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

jobCtrl.update = async (req, res) => {
  try {
    let id = req.params.id
    let { name, active, config, idProcess, status, finishAt} = req.body
    let update = await Job.update({id, name, active, config, idProcess, status, finishAt})
    res.status(200).send(update)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

jobCtrl.get = async (req, res) => {
  try {
    let {id} = req.params
    let {name, visible} = req.body
    let update = await Job.get({id, name, visible})
    res.status(200).send(update)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

jobCtrl.kill = async (req, res) => {
  try {
    let id = req.params.id
    let job = await Job.get({id})
    console.log(job[0].process.idSocket);
    io.to(job[0].process.idSocket).emit('logOut', job[0].name)
    res.status(200).send(job)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

module.exports = jobCtrl