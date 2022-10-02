import React from 'react'

//Validaciones
import useValidacion from '../hooks/useValidacion'
import validarCrearCuenta from '../validacion/validarCrearCuenta'

const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}





export default function Register() {

  function crearCuenta(){
    console.log('Creando cuenta')
  }

  const {valores, errores, handleSubmit, handleChange} = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta)

  const {nombre, email, password} = valores

  

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
              REGISTRARSE
            </h2>
            <input
              placeholder="   Nombre"
              id='nombre'
              name='nombre'
              type='text'
              className='h-8 border-2 border-gray-400 w-full my-4'
              value={nombre}
              onChange={handleChange}
            />
            {errores.nombre && alert(`${errores.nombre}`)}
            <input
              placeholder="   email"
              name='email'
              type='email'
              className='h-8 border-2 border-gray-400 w-full my-4'
              value={email}
              onChange={handleChange}
            />
            {errores.email && alert(`${errores.email}`)}
            <input
              placeholder="   Contraseña"
              name='password'
              type='password'
              className='h-8 border-2 border-gray-400 w-full my-4'
              value={password}
              onChange={handleChange}
            />
            {errores.password && alert(`${errores.password}`)}
            <button
              className='h-8 bg-pinkLiverpool text-white w-full my-4'
              onClick={handleSubmit}
            >
              Registrar
            </button>
          </div>
        </form>

      </div>
    </>
  )
}
