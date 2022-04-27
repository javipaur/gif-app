import React, { useState } from 'react'

export const GifApp = () => {

  //const categorias =['Javier','Carlos','Luis']

 const [categorias, setCategorias] = useState(['Javier','Carlos','Luis'])

const handleAdd= () => {
  setCategorias([...categorias,'Pepinillos']);
  //setCategorias(categorias =>[...categorias,'Pepe'])
}

  return (
    <>
        <h2>GifApp</h2>
        <hr/>
        <button onClick={handleAdd}>Insertar Categoria</button>
        <ol>
         {
            categorias.map(categoria => {
                return <li key={categoria}> {categoria}</li>
            })
         }
         
        </ol>
    </>
  )
}
