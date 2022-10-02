import React from 'react'
import Link from "next/link"

export default function notFound() {
  return (
    <>
      <div className="bg-pinkLiverpool">
        <div className="flex flex-row justify-between items-center mx-4">
          <div>
            <Link href={"/"}>
              <img src='/icon/logoLiverp.jpg' alt='logotipo' className='h-[35px] sm:h-[40px] cursor-pointer' />
            </Link>
          </div>
          <div className="mx-4">
            <Link href={"/"}>
              <button className="text-white">
                Regresar
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col '>
        <h2 className='font-bold text-center my-4 md:my-12 text-xl md:text-3xl mx-4'>
          Seguimos trabajando para ofrecerte un mejor servicio
        </h2>
        <img src='/img/trailer.jpg' alt='product' />
      </div>
    </>
  )
}
