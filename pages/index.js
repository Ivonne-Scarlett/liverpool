import React, { useState, useEffect } from 'react'

import Nav from "../components/Nav.jsx";
import CardProduct from "../components/CardProduct.jsx";

import {getAllCharacters} from '../lib/api'


export default function Home() {

  const [characters, setCharacters] = useState([])   
  useEffect(() => {
    getAllCharacters()
    .then(response => {
      setCharacters(response)
    }) 
  }, [])


  return (
    <>
      <Nav />
      <div className='my-4 md:my-12 mx-8 grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4'>
        <CardProduct />
      </div>
      
    </>
  )
}
