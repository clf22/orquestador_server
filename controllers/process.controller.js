const Process = require("../class/process.class");

const processCtrl = {}

processCtrl.create = async (req, res) => {
  try {
    let {name, idCompany, visible} = req.body
    let [newUser, created] = await Process.create({name, idCompany, visible})
    if(!created) newUser.update({visible:1})
    res.status(200).send(newUser)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

processCtrl.update = async (req, res) => {
  try {
    let { id } = req.params
    let {name, idCompany, visible} = req.body
    let update = await Process.update({id, name, idCompany, visible})
    res.status(200).send(update)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

processCtrl.get = async (req, res) => {
  try {
    let { id } = req.params
    let {name, idCompany, visible} = req.body
    let update = await Process.get({id, name, idCompany, visible})
    res.status(200).send(update)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

processCtrl.getHeaders = async (req, res) => {
  try {
    const headers = await Process.getHeader()
    res.status(200).send(headers)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

module.exports = processCtrl