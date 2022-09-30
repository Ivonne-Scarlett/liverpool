import React, { useState, useEffect } from 'react'
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
     
    </>
  )
}
