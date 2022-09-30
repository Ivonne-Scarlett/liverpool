import React from 'react'
import classNames from 'classnames'

export default function CategoryIndex() {
  return (
    <>
      <h3 className='font-extrabold mx-4 mt-4 md:mt-16 text-xl sm:text-4xl'>
        ÚLTIMAS HORAS DESCUENTOS MEDIA TEMPORADA
      </h3>
      <div className='mx-4 my-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8'>
        <div className='bg-femaleIndex h-48 md:h-80 bg-cover bg-center bg-no-repeat'>
          <h2 className={classNames(
            'bg-pinkLiverpool text-white',
            'font-bold text-center mt-32 md:mt-60',
            'text-xl sm:text-1xl md:text-5xl pb-1',
          )}>
            Mujeres
          </h2>
        </div>
        <div className='bg-maleIndex h-48 md:h-80 bg-cover bg-center bg-no-repeat'>
        <h2 className={classNames(
            'bg-pinkLiverpool text-white',
            'font-bold text-center mt-32 md:mt-60',
            'text-xl sm:text-1xl md:text-5xl pb-1',
          )}>
            Hombres
          </h2>
        </div>
      </div>
    </>
  )
}
