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

  static getHeader() {
    return Object.keys(models.user.tableAttributes)
  }

}