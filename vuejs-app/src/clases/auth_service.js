class AuthService{
  constructor(){
    this.authenticated = false
  }
  setAuthenticated(isAuthenticated) {
    this.authenticated = isAuthenticated
  }
  getAuthenticated(){
    return this.authenticated
  }
}


export default AuthService