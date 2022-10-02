import React from 'react'
import { initFirebase} from '../firebase/firebaseApp'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter} from 'next/router'
import Loader from "../components/Loader.jsx"

export default function signGoogle() {

  const app = initFirebase()
  const provider = new GoogleAuthProvider()
  const auth = getAuth()
  const [user, loading] = useAuthState(auth)
  const router = useRouter()

  if (loading) {
    return <Loader />
  }

  if (user) {
    router.push('/')
    return <div>welcome {user.displayName}</div>
  }

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result.user)
  }

  return (
    <>
      <div className="bg-pinkLiverpool">
          <div className="flex flex-row justify-between items-center mx-4">
            <div>
              <img src='/icon/logoLiverp.jpg' alt='logotipo' className='h-[35px] sm:h-[40px]' />
            </div>
          </div>
      </div>
      <h4 className='text-center mt-4 md:mt-12 font-bold'>Por favor registrate con tu cuenta de Google para continuar</h4>
      <div className="text-center flex flex-col items-center">        
        <button
          onClick={signIn}
        >      
          <div className="bg-pinkLiverpool text-white rounded p-2 w-48 mt-8 md:mt-16">Registrar</div>
        </button>
      </div>
    </>
  )
}
