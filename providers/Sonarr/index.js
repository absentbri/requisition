'use strict'

const { SonarrClient } = require('@nativecode/sonarr')

class Sonarr {
  constructor (Config) {
    this.Config = Config
    this.Client = null
  }

  get (endpoint = 'system') {
    if (!this.Client && this.Config) {
      this.Client = new SonarrClient({
        apikey: this.Config.api_key,
        host: this.Config.hostname,
        port: this.Config.port,
        secure: this.Config.ssl
      })
    }

    if (this.Client) {
      return this.Client[endpoint]
    } else {
      return this.Client
    }
  }

  update (config) {
    this.Config = config
    this.Client = null
  }

  async test (config) {
    // isolated call to client to test if credentials work
    const { apiKey: apikey, hostname: host, port, ssl: secure } = config
    const conn = new SonarrClient({
      apikey,
      host,
      port,
      secure,
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
