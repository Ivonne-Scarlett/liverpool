import React, { useState, useEffect } from 'react'

import Nav from "../components/Nav.jsx"
import CardProduct from "../components/CardProduct.jsx"
import CategoryIndex from "../components/CategoryIndex.jsx"
import ImagesLiverpool from "../components/ImagesLiverpool.jsx"
import Footer from "../components/Footer.jsx"
import Loader from "../components/Loader.jsx"

import Head from 'next/head';
import {getAllCharacters} from '../lib/api'


export default function Home() {

  const [characters, setCharacters] = useState([])  //Almacenamiento de todos los caracteres
  const [characterIndex, setCharacterIndex] = useState([]) //Almacenamiento de los últimos 12 items
  const [loading, setLoading] = useState(false)

  
  useEffect(() => {
    setLoading(true)
    getAllCharacters()
    .then(response => {
      setCharacters(response)
      const itemsIndexTotal = response.length
      const itemsIndexInicial = itemsIndexTotal - 12
      const dataIndexItems = response.slice(itemsIndexInicial, itemsIndexTotal)
      setCharacterIndex(dataIndexItems) //Traer los últimos 12 items
      setLoading(false)
    }) 
  }, [])

  const [inputValue, setInputValue]= useState([]); //Guardar datos del Search
  const [filtered, setFiltered] = useState(null); //Guarda los datos filtrados

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
      <Head>
        <meta name="description" content="Compra en línea y si tu tienda tiene el producto, recógelo 2 horas después en C&C."></meta>
        <meta name='keywords' content='compras ropa accesorios e-commerce tecnología hogar joyería' />
        <meta name="author" content="Ivonne Chavez"></meta>
        <meta name="revised" content="02/10/2022"></meta>
        <link rel='short icon' href='/favicon.jpg' />
        <title>Liverpool es parte de Mi vida</title>
      </Head>
      <Nav 
        value={inputValue}
        onChange={handlerChangeInput} 
      />
      <main>
        { loading && <Loader />}
        { filtered && <CardProduct loading={loading} allProducts={filtered} />}
        { !filtered && <CardProduct loading={loading} allProducts={characterIndex} /> }
        <CategoryIndex />
        <ImagesLiverpool />
      </main>
      <Footer />     
    </>
  )
}
