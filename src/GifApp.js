import React, { useState } from 'react'
import { AñadirCategoria } from './components/AñadirCategoria'
import { ListaGifs } from './components/ListaGifs'

export const GifApp = () => {

  //const categorias =['Javier','Carlos','Luis']

 const [categorias, setCategorias] = useState(['One Punch'])

//const handleAdd= () => {
  //setCategorias([...categorias,'Pepinillos']);
  //setCategorias(categorias =>[...categorias,'Pepe'])
//}

  return (
    <>
        <h2>GifApp</h2>
        <AñadirCategoria setCategorias={setCategorias}/>
        <hr/>
        
        <ol>
         {
            categorias.map(categoria => (
                 <ListaGifs 
                 key={categoria}
                 categoria={categoria}/>
        
            ))
          }   
        </ol>
    </>
  )
}
