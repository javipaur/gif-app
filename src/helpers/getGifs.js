  
  
  //Metodo para recuperar las img de la api
 export const getGifs = async (categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=zl2smSFVs7uXApnzH6Swd2erEITr3HCO`
    //console.log(url)
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            titulo: img.title,
            url: img.images?.downsized_medium.url

        }
    })

    //console.log(gifs)
    //setImagenes(gifs);

    return gifs;


}