import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifItem} from'./GifItem';

export const ListaGifs = ({ categoria }) => {

    //Hook
    //Cada vez que este componenete cambie se ejecutara nuestro hook
    const {data:imagenes,loading}= useFetchGifs( categoria);

    return (
        <>
            <h3>{categoria}</h3>   
            {

            loading && <p>Cargando</p>
            
            }       
             <div className='card-grid'>
                {
                    imagenes.map(img => (
                        <GifItem
                            key={img.id}
                            {...img} />
                    ))
                }

            </div>
        </>

    )
}
