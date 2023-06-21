import style from './Search.module.scss'
import searchIcon from "../../assets/icons/search-icon.svg"
import { useState } from 'react';
const Search = () => { 
    const [isFocused, setIsFocused] = useState(false);

  const toggleFocus = () => {
    setIsFocused(prevState => !prevState);
  };

  const searchContainerClassName = isFocused ? `${style.searchContainer} ${style.searchContainerFocus}` : style.searchContainer;
  
    return (

        <>
        <div className={searchContainerClassName}>
        <input className={style.search}
        type="search" 
        placeholder="Введіть тут для пошуку..."
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        />
        <img src={searchIcon} className={style.image} alt='#'/>
        </div>
        
        </>
    )
}

export default Search