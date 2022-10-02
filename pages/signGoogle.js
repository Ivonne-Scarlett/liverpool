import React from 'react'
import Link from "next/link"
import { initFirebase} from '../firebase/firebaseApp'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter} from 'next/router'

export default function signGoogle() {

  const app = initFirebase()
  const provider = new GoogleAuthProvider()
  const auth = getAuth()
  const [user, loading] = useAuthState(auth)
  const router = useRouter()


  if (loading) {
    return <div>Loading ...</div>
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
    <div className="text-center flex flex-col gap-4 items-center">
      <div>Please sign in to continue</div>
      <button
        onClick={signIn}
      >      
        <div className="bg-blue-600 text-white rounded-md p-2 w-48">Sign In</div>

        {/* <Link href="/">
          <a className="bg-blue-600 text-white rounded-md p-2 w-48">Sign In</a>
        </Link> */}
      </button>
    </div>
  )
}
