import app from 'firebase/app'
import firebaseConfig from './config'



class Firebase {
  constructor(){ 
    
    if(!firebase.apps.length ) {
      app.initializeApp(firebaseConfig)
    }
    // if(!app.apps.length) {
    //   app.initializeApp(firebaseConfig)
    // }
  }
}

const firebase = new Firebase()
export default firebase