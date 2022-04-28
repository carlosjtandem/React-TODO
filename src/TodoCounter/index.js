import React from 'react';
import './TodoCounter.css';
const estilos={
    color: 'red',
    backgroundColor: 'yellow'
}
function TodoCounter({total,completed}) {
    return (
        <h2 className='TodoCounter'>Has complentado {completed} de {total} TODOs</h2>
    );
}



export default  TodoCounter ;
