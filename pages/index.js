import React, { useState, useEffect } from 'react'
import {getAllCharacters} from '../lib/api'

export default function Home() {

  const [characters, setCharacters] = useState([])
   
  useEffect(() => {
    const characters = {}
    getAllCharacters()
    .then(response => {
      setCharacters(response)
    }) 
  }, [])


  return (
    <>
     <div>
        <div className="flex flex-wrap justify-evenly">   
           
          {
            characters.map((item, index) => {
              console.log('item',item)
              return (   
                <div key={index}>          
                  <p>{item.id}</p>   
                  <p>{item.name}</p>   
                  <p>{item.species}</p>    
                </div>
              )
            })
          } 
        </div>
     </div>
    </>
  )
}
