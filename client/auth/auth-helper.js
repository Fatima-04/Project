import { signout } from './api-auth.js'

const auth = {
//Retreive the stored credentials from the front end to check if the current user is signe in
  isAuthenticated() {
    if (typeof window == "undefined")
      return false

    if (sessionStorage.getItem('jwt'))
      return JSON.parse(sessionStorage.getItem('jwt'))
    else
      return false
  },

    //authenticate method is used to save the JWT credentials
    //This method take in JWT credential (jwt) and a callback function (cb)
  authenticate(jwt, cb) {
    if (typeof window !== "undefined")
      sessionStorage.setItem('jwt', JSON.stringify(jwt))
    cb()
  },

//Delete the JWT credential when user signed out
//This method takes a callback function as an argument
  clearJWT(cb) {
    if (typeof window !== "undefined")
      sessionStorage.removeItem('jwt')
    cb()
    //This is optional because we use sessionStorage instead of cookie to store JWT credentials
    signout().then((data) => {
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    })
  },
  updateUser(user, cb) {
    if(typeof window !== "undefined"){
      if(sessionStorage.getItem('jwt')){
         let auth = JSON.parse(sessionStorage.getItem('jwt'))
         auth.user = user
         sessionStorage.setItem('jwt', JSON.stringify(auth))
         cb()
       }
    }
  }
}

export default auth
