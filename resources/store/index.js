
export const state = () => ({
  token: 'test-token',
})

export const getters = {
  login(state) {
    return state.token.length > 0;
  },
}

export const mutations = {
  setToken(state, payload) {
    state.token = payload.token;
  },
  logout(state) {
    state.token = '';
  },
}

export const actions = {}
