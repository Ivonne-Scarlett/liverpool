import React from "react"
import Link from "next/link"
import Footer from "../../components/Footer.jsx"

export async function getStaticPaths() {
  try {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data = await res.json()
    const results = data.results
    const paths = results.map(({ id }) => ({ params: { id: `${id}` } }))
    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.log('Error en rutas estaticas', error)
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch('https://rickandmortyapi.com/api/character/' + params.id)
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  } catch (error) {
    console.log('Error en StaticProps', error)
  }
}

export default function id(data) {  
  return (
    <>
      <div className="bg-pinkLiverpool">
        <div className="flex flex-row justify-between items-center mx-4">
          <div>
            <Link href={"/"}>
              <img src='/icon/logoLiverp.jpg' alt='logotipo' className='h-[35px] sm:h-[40px] cursor-pointer' />
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
      <h2 className='mt-4 md:mt-8 text-center text-4xl text-pinkLiverpool'>
        DETALLE DEL PRODUCTO
      </h2>
      <div className="mt-4 flex justify-center">
        <div className='flex flex-col'>
          <div className='m-4'>
            <img src={data.data.image} alt='product' />
          </div>
          <h3 className='text-center'>
            Nombre: {data.data.name}
          </h3>
          <p className='text-center'>
            Género: {data.data.gender}
          </p>
          <p className='text-center'>
            Especie: {data.data.species}
          </p>
          <p className='text-center'>
            Estado: {data.data.status}
          </p>
          <div className='text-center text-red-600 font-semibold'>
            $599.00
          </div>
        </div>        
      </div>
      <Footer />
    </>
  )
}

