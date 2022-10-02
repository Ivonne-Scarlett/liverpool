import '../styles/globals.css'
import App from 'next/app'
import firebase, {FirebaseContext} from '../firebase'

const MyApp = props => {
  // {Component {...pageProps} }
  const {Component, pageProps} = props
  return (  
    <FirebaseContext.Provider
      value={{
        firebase
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  ) 
}

export default MyApp
