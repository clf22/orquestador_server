const { models } = require('../database/connection')

module.exports = class User {
  constructor() {}

  static create({name, passwd, email, phone, idRol, more = {}}) {
    if(!name) throw new Error(`Debe introducir el nombre`)
    if(!passwd) throw new Error(`Debe introducir la contraseña`)
    if(!email) throw new Error(`Debe introducir el email`)
    if(!idRol) throw new Error(`Debe introducir el rol`)
    return models.user.findOrCreate({ where: {name}, defaults: { passwd, email, phone, idRol, more } })
  }

  static update({id, name, passwd, email, idRol, more}) {
    return models.user.update({ name, passwd, email, idRol, more }, { where: {id} })
  }

  static get({id, name, email, idRol}){
    let where = {}
    if(id) where.id = id
    if(name) where.name = name
    if(email) where.email = email
    if(idRol) where.idRol = idRol
    return models.user.findAll({ where })
  }

  static async getHeader() {
    let fields = Object.entries(models.user.tableAttributes)
    for(let field of fields) {
      field[1].dataType = models.user.rawAttributes[field[0]].type.key;
      if (field[1].references) {
        field[1].options = await models[field[1].references.model].findAll({where: {visible:true}})
      }
    }
    return fields
  }

}