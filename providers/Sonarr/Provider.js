const { ServiceProvider } = require('@adonisjs/fold')

class SonarrProvider extends ServiceProvider {
  register () {
    this.app.singleton('Service/Sonarr', () => {
      return new (require('.'))(this.Config)
    })
  }

  async boot() {
    // grabs initial config from the database to pass into the provider
    const Setting = this.app.use('App/Models/Setting')
    this.Config = await Setting.find("sonarr")
  }
}

module.exports = SonarrProvider
