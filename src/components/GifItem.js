import React from 'react'

export const GifItem = ({id,titulo,url}) => {
   // console.log(id,titulo,url);
  return (
      
    <div className='card'>
    <img src={url} alt={titulo}></img>
    <p>{titulo}</p>
    </div>
  )
}
