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
      
      <CardProduct allProducts={characters} />
      
      
    </>
  )
}
