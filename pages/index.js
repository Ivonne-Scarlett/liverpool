import React, { useState, useEffect } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter} from 'next/router'
import Head from 'next/head';

import Nav from "../components/Nav.jsx"
import CardProduct from "../components/CardProduct.jsx"
import CategoryIndex from "../components/CategoryIndex.jsx"
import ImagesLiverpool from "../components/ImagesLiverpool.jsx"
import Footer from "../components/Footer.jsx"
import Loader from "../components/Loader.jsx"

import {getAllCharacters} from '../lib/api'

export default function Home() {
  const [characters, setCharacters] = useState([])  //Almacenamiento de todos los caracteres RickandMorty
  const [characterIndex, setCharacterIndex] = useState([]) //Almacenamiento de los últimos 12 items de la API RickandMorty
  const [loaderFigure, setLoaderFigure] = useState(false)  //Para mostrar spinner al cargar la pagina
  const [inputValue, setInputValue]= useState([]); //Guardar datos del Search Article
  const [filtered, setFiltered] = useState(null); //Guarda los datos filtrados

  // Autenticación con Google
  const auth = getAuth()
  const [user, loading] = useAuthState(auth)
  const router = useRouter()
  
  useEffect(() => {
    // if (!user) {    
    //   router.push('/signGoogle') //En caso de no estar logueado redirecciona al login
    // }
    setLoaderFigure(true)
    getAllCharacters()
    .then(response => {
      setCharacters(response)
      const itemsIndexTotal = response.length
      const itemsIndexInicial = itemsIndexTotal - 12
      const dataIndexItems = response.slice(itemsIndexInicial, itemsIndexTotal)
      setCharacterIndex(dataIndexItems) //Traer los últimos 12 items
      setLoaderFigure(false)
    })     
  }, [])
  
  // Handler cuando el cliente escriba en el search
  const handlerChangeInput = (event) => {
    const valueInput = event.target.value
    const datavalueInput = valueInput.toLowerCase()
    setInputValue(datavalueInput)
    const filterResult = characters.filter( itemFilter => {
      const valueName= itemFilter.name
      return valueName.toLowerCase().includes(inputValue)
    })   
    //Mostrar que el producto no se encontro
    if (!filterResult) {
      alert("Producto no encontrado")
    } else {
      setFiltered(filterResult)
    }   
    //Si el search esta vacio mostrar los ultimos 12 productos
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
        { loaderFigure && <Loader />} 
        { filtered && <CardProduct allProducts={filtered} />}
        { !filtered && <CardProduct allProducts={characterIndex} /> }
        <CategoryIndex />
        <ImagesLiverpool />
      </main>
      <Footer />     
    </>
  )
}
