const { ServiceProvider } = require('@adonisjs/fold')

class SonarrProvider extends ServiceProvider {
  register () {
    this.app.singleton('Service/Sonarr', () => {
      return new (require('.'))(this.Config)
    })
  }

  async boot() {
    this.Logger = this.app.use('Logger')
    // grabs initial config from the database to pass into the provider
    try {
      // initial migration fails as no table for this to call...
      const Setting = this.app.use('App/Models/Setting')
      this.Config = await Setting.find('sonarr')
    } catch (e){
      this.Logger.error('Failed to load Sonarr setting from DB...', { note: 'This is normal while migrating...' })
    }

  }
}

module.exports = SonarrProvider
