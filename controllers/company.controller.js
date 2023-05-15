const Business = require("../class/company.class")


const companyCtrl = {}

companyCtrl.create = async (req, res) => {
  try {
    let {name, visible} = req.body
    let [newUser, created] = await Business.create({name, visible})
    if(!created) newUser.update({visible:1})
    res.status(200).send(newUser)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

companyCtrl.update = async (req, res) => {
  try {
    let id = req.params.id
    let {name, visible} = req.body
    let update = await Business.update({id, name, visible})
    res.status(200).send(update)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

companyCtrl.get = async (req, res) => {
  try {
    let {id} = req.params
    let {name, visible} = req.body
    let update = await Business.get({id, name, visible})
    res.status(200).send(update)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}

module.exports = companyCtrl