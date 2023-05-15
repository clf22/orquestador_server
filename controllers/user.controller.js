const User = require("../class/user.class");

const userCtrl = {}

userCtrl.create = async (req, res) => {
  try {
    let {name, passwd, email, phone, idRol, more} = req.body
    if(more) more = JSON.parse(more)
    let [newUser, created] = await User.create({name, passwd, email, phone, idRol, more})
    if(!created) newUser.update({visible:1})
    res.status(200).send(newUser)
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || error)
  }
}

userCtrl.update = async (req, res) => {
  try {
    let id = req.params.id
    let {name, passwd, email, phone, idRol, more} = req.body
    if(more) more = JSON.parse(more)
    let update = await User.update({id, name, passwd, email, phone, idRol, more})
    res.status(200).send(update)
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || error)
  }
}

userCtrl.get = async (req, res) => {
  try {
    let {id} = req.params
    let {name, visible} = req.query
    let update = await User.get({id, name, visible})
    res.status(200).send(update)
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || error)
  }
}

userCtrl.getHeaders = (req, res) => {
  try {
    res.status(200).send(User.getHeader())
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

module.exports = userCtrl