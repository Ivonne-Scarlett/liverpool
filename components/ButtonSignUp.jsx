import React from 'react'
import Link from "next/link"
import { initFirebase} from '../firebase/firebaseApp'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter} from 'next/router'

export default function ButtonSignUp() {
  const auth = getAuth()
  const [user, loading] = useAuthState(auth)
  const router = useRouter()

  return (
    <>
      <Link href={"/signGoogle"}>
        <button className="text-white"
         onClick={() => auth.signOut()}
        >
          Salir
        </button>
      </Link>
    </>    
  )
}
