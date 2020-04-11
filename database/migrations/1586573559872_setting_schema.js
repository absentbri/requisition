'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SettingSchema extends Schema {
  up () {
    this.create('settings', (table) => {
      table.string('service', 50).unique().primary()
      table.string('hostname', 255).notNull()
      table.string('api_key', 100).notNull()
      table.string('base_url', 255)
      table.integer('port').unsigned()
      table.integer('folder').unsigned()
      table.integer('profile').unsigned()
      table.boolean('ssl').notNull().defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('settings')
  }
}

module.exports = SettingSchema
