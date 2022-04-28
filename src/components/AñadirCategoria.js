import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AñadirCategoria = ({setCategorias}) => {

    //Estado inicial del componente
const [inputValue,seteInputValue]=useState('')
    //Evento para capturar el cambio de el input
const handleInputChange =(e)=>{
    seteInputValue(e.target.value);
}
//Evento que se lanza al presionar enter
const handleSubmit=(e)=>{
    e.preventDefault();

    if(inputValue.trim().length>2){
           // console.log('Submit hecho!')
   //Aqui  decidimos el orden en el que se mostraran los gifs segun las ultimas busquedas de categorias.        
   setCategorias(categorias =>[inputValue,...categorias]);
   //setCategorias([...setCategorias,inputValue]);
   //Seteamos el input a valor ''
   seteInputValue('');

    }

    


}

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}/>
    </form>
  )
}

AñadirCategoria.prototype={
    setCategorias:PropTypes.func.isRequired    
}
