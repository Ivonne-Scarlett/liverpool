import React, { useState, useEffect } from "react"
import Link from "next/link"
import Footer from "../../components/Footer.jsx"



export default function id() { 

  return (    
    <>
      <div className="bg-pinkLiverpool">
        <div className="flex flex-row justify-between items-center mx-4">
          <div>
            <Link href={"/"}>
              <img src='/icon/logoLiverp.jpg' alt='logotipo' className='h-[35px] sm:h-[40px] cursor-pointer'/>
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

      <div className="mt-12">
        <p>img</p>
        <p>nombre</p>
      </div>

      <Footer />
    </>
  )
}