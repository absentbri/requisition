'use strict'

class UserSession {

    async create ({ request, auth }) {
      const { username, password } = request.all()
      try {
        const {id, username:user, email} = await auth.attempt(username, password)
        return { user: {id, username: user, email} }
      } catch (e) {
        // console.log(e)
      }
    }

    async index ({ auth }) {
      try {
        const {id, username, email} = await auth.getUser();
        return { user: {id, username, email} }
      } catch (e) {
        // console.log(e)
        return {}
      }
    }

    async destroy ({ auth }) {
      try {
        await auth.logout()
      } catch (e) {
        // console.log(e)
      }
    }

}

module.exports = UserSession
