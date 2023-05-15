const { models } = require('../database/connection')

module.exports = class Rol {
  constructor() {}

  static create({name, visible = 1}) {
    return models.rol.findOrCreate({ where: {name}, defaults: { visible } })
  }

  static update({id, name, visible}) {
    return models.rol.update({ name, visible }, { where: {id} })
  }

  static get({id, name, visible}){
    let where = {}
    if(id) where.id = id
    if(name) where.name = name
    if(visible || typeof visible !== 'undefined') where.visible = visible
    return models.rol.findAll({ where })
  }

  static getHeader() {
    return Object.keys(models.rol.tableAttributes)
  }
}