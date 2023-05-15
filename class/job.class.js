const { models } = require('../database/connection')

module.exports = class Job {
  constructor() {}

  static create({name, active = 1, config = {}, idProcess}) {
    if(config && typeof config !== 'object') config = JSON.parse(config)
    return models.job.findOrCreate({ where: {name}, defaults: { active, config, idProcess } })
  }

  static update({id, name, active, config, idProcess, status, finishAt}) {
    if(config) config = JSON.parse(config)
    return models.job.update({ name, active, config, idProcess, status, finishAt }, { where: {id} })
  }

  static get({id, name, active, idProcess, status, finishAt}){
    let where = {}
    if(id) where.id = id
    if(name) where.name = name
    if(active || typeof active !== 'undefined') where.active = active
    if(idProcess) where.idProcess = idProcess
    if(status) where.status = status
    if(finishAt) where.finishAt = finishAt
    return models.job.findAll({ where, include: [{model: models.process}] })
  }
}