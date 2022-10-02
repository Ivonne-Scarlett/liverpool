import React from 'react'

export default function Login() {
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
        <form>
          <div className='flex flex-col'>
            <h2 className='font-bold text-center my-4 md:my-12 text-xl md:text-4xl'>
              INICIAR SESIÓN
            </h2>
            <input
              placeholder="   Nombre"
              name='user'
              type='text'
              className='h-8 border-2 border-gray-400 w-full my-4'
              
            />
            <input
              placeholder="   Contraseña"
              name='password'
              type='password'
              className='h-8 border-2 border-gray-400 w-full my-4'
              
            />
            <button
              className='h-8 bg-pinkLiverpool text-white w-full my-4'
              
            >
              Entrar
            </button>
          </div>
        </form>

      </div>

    </>
  )
}
