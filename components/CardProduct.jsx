import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'

export default function CardProduct({ allProducts }) {
  console.log('allProd', allProducts)
  return (
    <>
      <div className='my-8 sm:my-12 mx-4 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7'>
        {
          allProducts.map((item, index) => {
            console.log('item', item)
            return (
              <div key={index} className='flex flex-col border-2 border-slate-100'>
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
