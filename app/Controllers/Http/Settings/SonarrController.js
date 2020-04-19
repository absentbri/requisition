'use strict'

const Setting = use('App/Models/Setting')
const SonarrClient = use('Service/Sonarr')

class SonarrController {
  /* CRUD */
  async index () {
    return Setting.find('sonarr')
  }

  async store ({ request }) {
    const props = request.only(['folder', 'hostname', 'port', 'profile', 'ssl'])
    const { apiKey: api_key, baseUrl: base_url } = request.only(['apiKey', 'baseUrl'])
    props.service = 'sonarr'
    props.api_key = api_key
    props.base_url = base_url

    const setting = await Setting.findOrCreate({ service: 'sonarr' }, props)

    setting.fill(props)

    await setting.save()

    await setting.reload()

    // update the service
    SonarrClient.update(setting)
  }

  /* CUSTOM */
  async test ({ request, response }) {
    const config = request.only(['ssl', 'hostname', 'port', 'apiKey'])

    const connTest = await SonarrClient.test(config)

    if (connTest) {
      response.status(200)
        .send(connTest)
    } else {
      response.status(500)
        .send(connTest)
    }
  }

  async options ({ params }) {
    let obj = {}
    switch (params.type) {
      case 'profiles':
        obj.profiles = await this._profiles()
        break
      case 'folders':
        obj.folders = await this._folders()
        break
      default:
        obj.profiles = await this._profiles()
        obj.folders = await this._folders()
        break
    }
    return obj
  }

  /* DEBUG */
  async scratch () {
    return {
      profiles: await this._profiles(),
      folders: this._folders()
    }
  }

  /* PRIVATES */
  async _profiles () {
    const response = await SonarrClient
      .get('profile')
      .list()

    return response.map(el => {
      return { text: el.name, value: el.id }
    })
  }

  async _folders () {
    /* TODO - Add PRs for:
    * - baseUrl
    * - http_post for `Series`
    * - http_get for `Series-Lookup`
    * */

    // hard coding until API can return this, PR added https://github.com/nativecode-dev/media-clients/pull/2
    return [
      { text: "/tv/TV Shows/", value: 1 }
    ]
    /* await SonarrClient
      .get('rootfolder')
      .list() */
  }
}

module.exports = SonarrController
