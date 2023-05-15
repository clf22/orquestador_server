const Permission = require("../class/permission.class");

const permissionCtrl = {}

permissionCtrl.create = async (req, res) => {
  try {
    let {companyId, userId, process, visible} = req.body
    if(process) process = JSON.parse(process)
    let [newUser, created] = await Permission.create({companyId, userId, process, visible})
    if(!created) newUser.update({visible:1})
    res.status(200).send(newUser)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

permissionCtrl.update = async (req, res) => {
  try {
    let {companyId, userId, process, visible} = req.body
    if(process) process = JSON.parse(process)
    let update = await Permission.update({companyId, userId, process, visible})
    res.status(200).send(update)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

permissionCtrl.get = async (req, res) => {
  try {
    let {companyId, userId, visible} = req.body
    let update = await Permission.get({companyId, userId, visible})
    res.status(200).send(update)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

module.exports = permissionCtrl