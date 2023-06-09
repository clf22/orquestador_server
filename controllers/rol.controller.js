const Rol = require("../class/rol.class");

const rolCtrl = {}

rolCtrl.create = async (req, res) => {
  try {
    let {name, visible} = req.body
    let [newUser, created] = await Rol.create({name, visible})
    if(!created) newUser.update({visible:1})
    res.status(200).send(newUser)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

rolCtrl.update = async (req, res) => {
  try {
    let id = req.params.id
    let {name, visible} = req.body
    let update = await Rol.update({id, name, visible})
    res.status(200).send(update)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

rolCtrl.get = async (req, res) => {
  try {
    let {id} = req.params
    let {name, visible} = req.body
    let update = await Rol.get({id, name, visible})
    res.status(200).send(update)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

module.exports = rolCtrl