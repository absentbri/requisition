'use strict'

const { SonarrClient } = require('@nativecode/sonarr')

class Sonarr {
  constructor (Config) {
    this.Config = Config
    this.Client = null
  }

  get (endpoint = 'system') {
    if (this.Client) {
      return this.Client[endpoint]
    }

    if (this.Config) {
      this.Client = new SonarrClient({
        apikey: this.Config.api_key,
        host: this.Config.hostname,
        port: this.Config.port,
        secure: this.Config.ssl
      })
    }

    return this.Client[endpoint]
  }

  update (config) {
    this.Config = config
    this.Client = null
  }

  async test (config) {
    // isolated call to client to test if credentials work
    const conn = new SonarrClient({
      apikey: config.apiKey,
      host: config.hostname,
      port: config.port,
      secure: config.ssl
    })

    try {
      await conn.system.status()
      return true
    } catch (e) {
      return false
    }
  }
}

module.exports = Sonarr
