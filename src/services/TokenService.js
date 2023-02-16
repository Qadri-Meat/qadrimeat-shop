class TokenService {
  getRefreshToken() {
    return window.localStorage.getItem('refreshToken')
  }

  getAccessToken() {
    return window.localStorage.getItem('accessToken')
  }

  setTokens(tokens) {
    window.localStorage.setItem('accessToken', tokens.access.token)
    window.localStorage.setItem('refreshToken', tokens.refresh.token)
  }

  getUserData() {
    return JSON.parse(localStorage.getItem('userData'))
  }

  setUserData(user) {
    window.localStorage.setItem('userData', JSON.stringify(user))
  }

  removeUserData() {
    localStorage.removeItem('userData')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('register')
  }
}

export default new TokenService()
