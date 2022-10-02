import React from 'react'
import Link from "next/link"

export default function ButtonSignUp() {
  
  return (
    <>
      <Link href={"/login"}>
        <button className="text-white">
          Salir
        </button>
      </Link>
    </>    
  )
}
