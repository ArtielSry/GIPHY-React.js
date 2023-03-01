import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import GifImg from "./GifImg";

const GifGrid = ( {categories} ) => {

  const [ images, setImages ] = useState([]);

  

    const getImages = async() => {
      const newImages = await getGifs(categories);
      setImages(newImages);
    }
    useEffect( () => {
      getImages();
    }, [])


    return (
    <div className="container__cards">
        <h3>{ categories }:</h3>
        <div className="card-grid">
          { 
            images.map( ( image ) => (
              <GifImg key={ image.id}
              {...image}/>
          ))
          }
    </div>
    </div>
  )
}

export default GifGrid

/* COMPONENTE DONDE PEGAMOS EL COMPONENTE GIFIMG QUE VA A TENER 
LOS TITULOS Y LOS GIFS */