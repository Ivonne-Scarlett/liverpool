import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";

import {getAllUsers} from '../lib/api'

export default function Login() {
  const router = useRouter()

  const [allUsers, setAllUsers] = useState([])
  useEffect(() => {
    getAllUsers()
    .then(response => {
      setAllUsers(response)
    }) 
  },[])

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');
  
  console.log('allUsers',allUsers)
  console.log('data',data)

  // const [isLogged, setIsLogged] = useState(false)
  // const logIn = (event) => {
  //   console.log('Sesión iniciada con éxito, redireccionando!')
  //   setIsLogged(!isLogged)
  //   localStorage.setItem('userToken', 'test')
  //   setTimeout(function () {
  //     router.push(`/`)
  //   }, 2000)
  // }



  return (      
    <>
      <div className="bg-pinkLiverpool">
        <div className="flex flex-row justify-between items-center mx-4">
          <div>
            <img src='/icon/logoLiverp.jpg' alt='logotipo' className='h-[35px] sm:h-[40px] cursor-pointer' />
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-4 md:mt-8'>
          <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            <div className='flex flex-col'>
              <h2 className='font-bold text-center my-4 md:my-12 text-xl md:text-4xl'>
                INICIAR SESIÓN
              </h2>
              <input 
                {...register("user")} 
                placeholder="   Nombre" 
                name='user'
                className='h-8 border-2 border-gray-400 w-full my-4'
              />
              <input 
                {...register("password")} 
                placeholder="   Contraseña" 
                name='password'
                type='password'
                className='h-8 border-2 border-gray-400 w-full my-4'
              />
              <button 
                type="submit"
                className='h-8 bg-pinkLiverpool text-white w-full my-4'
                // onclick={() => logIn()} 
              >
                Entrar
              </button>
            </div>
          </form>
        
      </div>
    </>
  )
}
