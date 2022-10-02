import React from 'react'
import classNames from 'classnames';
import Image from 'next/image'

export default function SearchByArtist({ onChange, value, onClick }) {
  const handlerOnClick = event => {
    event.preventDefault()
  }
  return (
    <>
      <div className='bg-pinkLiverpool flex flex-row justify-center'>
        <form
          className={classNames(
            'flex w-full mx-4  ',
            'mb-2'
          )}
        >
          <input
            type='text'
            placeholder='Buscar por nombre'
            className={classNames(
              'bg-white h-6 w-full',              
              'rounded-l-lg p-4 px-4',
              'text-gray-800'
            )}
            onChange={onChange}
            value={value}
          />
          <button className={classNames(
            'bg-white',
            'px-2 pt-1 rounded-r-lg',
            )}
            onClick={handlerOnClick}
            >
              <Image src='/icon/lupa.png' alt='lupa' height='20px' width='20px'/>
          </button>
        </form>
      </div>
    </>
  )
}
