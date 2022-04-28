import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem'

export const ListaGifs = ({ categoria }) => {

    //Estado
    const [imagenes, setImagenes] = useState([])

    useEffect(() => {
        //Llamamos al helpere que recoge esta accion de recuperar los gifs de al api
        //Le pasamos la categoria para  hacer la busqueda especifica
        //El then lo implementamos porque este metodo nos esta evolviendo una promesa.
        getGifs(categoria)
        //.then(imgs=>setImagenes(imgs))
        .then(setImagenes);
    }, [categoria])

  



    return (
        <>
            <h3>{categoria}</h3>
            <div className='card-grid'>

                {
                    imagenes.map(img => (
                        <GifItem
                            key={img.id}
                            {...img} />
                    )

                    )
                }

            </div>
        </>

    )
}
