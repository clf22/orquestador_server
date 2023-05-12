const { models } = require('../database/connection')

module.exports = class Process {
  constructor() {}

  static create({name, idCompany, visible = 1}) {
    return models.process.findOrCreate({ where: {name}, defaults: { visible, idCompany } })
  }

  static update({id, name, idCompany, visible}) {
    return models.process.update({ name, visible, idCompany }, { where: {id} })
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