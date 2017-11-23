const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb){
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  singout(cb){
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

export default fakeAuth