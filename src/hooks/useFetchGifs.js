import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
  
    //Estado
    const [estado, setState] = useState({
        data:[],
        loading: true
    });


      useEffect(() => {
         //Llamamos al helper que recoge esta accion de recuperar los gifs de al api
         //Le pasamos la categoria para  hacer la busqueda especifica
         //El then lo implementamos porque este metodo nos esta evolviendo una promesa.
         getGifs(categoria)
         .then(imgs=>{
             setTimeout(()=>{

                //console.log(imgs);
                setState({
                    data:imgs,
                    loading:false
                })

             },3000);
         })

     }, [categoria])


    return estado;

}
