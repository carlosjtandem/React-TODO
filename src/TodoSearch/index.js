import React from "react";
import './TodoSearch.css';


function TodoSearch({ searchValue, setSearchValue }) {
    const onSearchValeChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }
    return (
        <input
            className="TodoSearch"
            placeholder='Inser value'
            value={searchValue}
            onChange={onSearchValeChange} />)
}

export default TodoSearch;