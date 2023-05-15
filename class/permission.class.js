const { models } = require('../database/connection')

module.exports = class Permission {
  constructor() {}

  static create({companyId, userId, process = {}, visible = 1}) {
    return models.permission.findOrCreate({ where: {companyId, userId}, defaults: { process, visible } })
  }

  static update({companyId, userId, process, visible}) {
    return models.permission.update({ process, visible }, { where: {companyId, userId} })
  }

  static get({companyId, userId, visible}){
    let where = {}
    if(companyId) where.companyId = companyId
    if(userId) where.userId = userId
    if(visible || typeof visible !== 'undefined') where.visible = visible
    return models.permission.findAll({ where })
  }
}