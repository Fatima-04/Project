import { signout } from './api-auth.js'

const auth = {
//Retreive the stored credentials from the front end to check if the current user is signe in
  isAuthenticated() {
    if (typeof window == "undefined")
      return false

    if (localStorage.getItem('jwt'))
      return JSON.parse(localStorage.getItem('jwt'))
    else
      return false
  },

    //authenticate method is used to save the JWT credentials
    //This method take in JWT credential (jwt) and a callback function (cb)
  authenticate(jwt, cb) {
    if (typeof window !== "undefined")
    //localStorage is used to extend the user auth state across 
    //the tabs in the browser.
    localStorage.setItem('jwt', JSON.stringify(jwt))
    cb()
  },

//Delete the JWT credential when user signed out
//This method takes a callback function as an argument
  clearJWT(cb) {
    if (typeof window !== "undefined")
    localStorage.removeItem('jwt')
    cb()
    signout().then((data) => {
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    })
  },

  updateUser(user, cb) {
    if(typeof window !== "undefined"){
      if(localStorage.getItem('jwt')){
         let auth = JSON.parse(localStorage.getItem('jwt'))
         auth.user = user
         localStorage.setItem('jwt', JSON.stringify(auth))
         cb()
       }
    }
  }
}

export default auth
