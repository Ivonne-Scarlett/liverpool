import React, { useState, useEffect } from 'react'

import Nav from "../components/Nav.jsx";
import CardProduct from "../components/CardProduct.jsx";

import {getAllCharacters} from '../lib/api'


export default function Home() {

  const [characters, setCharacters] = useState([])  
  const [characterIndex, setCharacterIndex] = useState([])

  useEffect(() => {
    getAllCharacters()
    .then(response => {
      setCharacters(response)
      const itemsIndexTotal = response.length
      const itemsIndexInicial = itemsIndexTotal - 12
      const dataIndexItems = response.slice(itemsIndexInicial, itemsIndexTotal)
      setCharacterIndex(dataIndexItems)
      console.log(characterIndex)
    }) 
  }, [])


  const [inputValue, setInputValue]= useState([]);
  const [filtered, setFiltered] = useState(null);

  const handlerChangeInput= (event) => {
    const valueInput = event.target.value
    const datavalueInput = valueInput.toLowerCase()
    setInputValue(datavalueInput)
    const filterResult = characters.filter( itemFilter => {
      const valueName= itemFilter.name
      return valueName.toLowerCase().includes(inputValue)
    })   

    if (!filterResult) {
      alert("Producto no encontrado")
    } else {
      setFiltered(filterResult)
    }   
    !valueInput ? setFiltered(null) : setFiltered(filterResult)
  }
  
 
  return (
    <>
      <Nav 
        value={inputValue}
        onChange={handlerChangeInput} 
      />
      <main>
        { filtered && <CardProduct allProducts={filtered} />}
        { !filtered && <CardProduct allProducts={characterIndex} /> }
      </main>
      
      
    </>
  )
}
