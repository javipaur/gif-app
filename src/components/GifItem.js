import React from 'react'

export const GifItem = ({id,titulo,url}) => {
   // console.log(id,titulo,url);
  return (
      
    <div className="card animate__animated animate__fadeIn">
    <img src={url} alt={titulo}></img>
    <p>{titulo}</p>
    </div>
  )
}
