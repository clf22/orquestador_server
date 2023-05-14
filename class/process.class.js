const { models } = require('../database/connection')

module.exports = class Process {
  constructor() {}

  static create({name, idCompany=1, idSocket, visible = 1}) {
    return models.process.findOrCreate({ where: {name}, defaults: { visible, idCompany, idSocket } })
  }

  static update({id, name, idCompany, visible, idSocket}) {
    return models.process.update({ name, visible, idCompany, idSocket }, { where: {id} })
  }

  static get({id, name, idCompany, visible}){
    let where = {}
    if(id) where.id = id
    if(name) where.name = name
    if(idCompany) where.idCompany = idCompany
    if(visible || typeof visible !== 'undefined') where.visible = visible
    return models.process.findAll({ where })
  }
}