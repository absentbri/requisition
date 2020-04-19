'use strict'

const SonarrClient = use('Service/Sonarr')

class SearchController {
  index({request}) {
    const response = await SonarrClient
      .get('serieslookup')
      .list()
  }
}

module.exports = SearchController
