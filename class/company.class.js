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
    if(visible || typeof visible !== 'undefined') where.visible = visible
    return models.company.findAll({ where })
  }

  static getHeader() {
    let fields = Object.entries(models.rol.tableAttributes)
    for(let field of fields) {
      field[1].dataType = models.rol.rawAttributes[field[0]].type.key;
    }
    return fields
  }
}