const { models } = require('../database/connection')

module.exports = class Company {
  constructor() {}

  static create({name, visible = 1}) {
    return models.company.findOrCreate({ where: {name}, defaults: { visible } })
  }

  static update({id, name, visible}) {
    return models.company.update({ name, visible }, { where: {id} })
  }

  static get({id, name, visible}){
    let where = {}
    if(id) where.id = id
    if(name) where.name = name
    console.log(visible);
    if(visible || typeof visible !== 'undefined') where.visible = visible
    console.log(where)
    return models.company.findAll({ where })
  }
}