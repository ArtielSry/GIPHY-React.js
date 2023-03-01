import { useState } from "react"
import AddCategories from "./components/AddCategories" // componente del input
import GifGrid from "./components/GifGrid"; // componente del grupo de gif


export default function GifExpertApp() {

    const [categories, setCategories] = useState([  ])

    const onAddCategories = ( newCategories ) => {
        if( categories.includes(newCategories) ) return;
        setCategories([  newCategories, ...categories])
    }


  return (<>
  <div className="body">
    <div className='title'>
      <h1>Gif ExpertApp</h1>
    </div>
    <div className='search'>
        <AddCategories  
            onNewCategories = { (value) => onAddCategories(value) }
        /> 
    </div>
    <div className='listado'>
        { 
            categories.map( (categories) => {
                return(
                <GifGrid 
                key={categories} 
                categories={categories}
                /> )}
                )
        }
    </div>
    </div>
    </>
  )
}



/* PÁGINAL PRINCIPAL */