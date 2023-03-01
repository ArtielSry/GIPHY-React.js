import { useState } from "react";

const AddCategories = ({ onNewCategories}) => {

    const [inputValue, setInputValue ] = useState( '' );

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;

        /* setCategories( categories => [ inputValue, ...categories]); */
        setInputValue('');
        onNewCategories( inputValue.trim())
    }
    
  return (
    <form onSubmit={ (e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={ (e) => onInputChange(e)}
      />
    </form>
  )
}


export default AddCategories;

/* COMPONENTE INPUT QUE USAMOS PARA BUSCAR LOS GIFS */