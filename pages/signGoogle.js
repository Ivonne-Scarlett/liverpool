/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import { initFirebase} from '../firebase/firebaseApp'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter} from 'next/router'
import Head from 'next/head';
import Loader from "../components/Loader.jsx"

export default function signGoogle() { 

  // Autenticación con Google
  const app = initFirebase()
  const provider = new GoogleAuthProvider()
  const auth = getAuth() 
  const [user, loading] = useAuthState(auth) 
  const router = useRouter() 

  //Spiner que se muestra al cargar la página 
  if (loading) {
    return <Loader />
  }

//user contine la información de Google Autentication (token) 
  if (user) {
    router.push('/')
  }
  

  //función para ingresar con popUp de Google
  const signIn = async () => {
    const result = await signInWithPopup(auth, provider)
  }

  return (
    <>
      <Head>
        <meta name="description" content="Compra en línea y si tu tienda tiene el producto, recógelo 2 horas después en C&C."></meta>
        <meta name='keywords' content='compras ropa accesorios e-commerce tecnología hogar joyería' />
        <meta name="author" content="Ivonne Chavez"></meta>
        <meta name="revised" content="02/10/2022"></meta>
        <link rel='short icon' href='/favicon.jpg' />
        <title>Liverpool es parte de Mi vida</title>
      </Head>
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
