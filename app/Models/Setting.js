'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Setting extends Model {

  static get primaryKey () {
    return 'service'
  }

  static get Serializer () {
    return use('App/Models/Serializers/JsonSerializer')
  }

}

module.exports = Setting
