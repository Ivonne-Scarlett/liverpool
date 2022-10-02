import React from 'react'
import { useRouter } from 'next/router'

export default function CardProduct({ allProducts }) {
  const router = useRouter()
  return (
    <>
      <div className='my-8 sm:my-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-7'>
        {
          allProducts.map((item, index) => {
            return (
              <div 
                className='flex flex-col cursor-pointer'
                key={index} 
                onClick={() => router.push(`/product/${item.id}`)}                
              >
                <div className='m-4'>
                  <img src={item.image} alt='product'/>
                </div>
                <h3 className='ml-4'>
                  Nombre: {item.name}
                </h3>
                <div className='ml-4 text-red-600 font-semibold'>
                  $599.00
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
