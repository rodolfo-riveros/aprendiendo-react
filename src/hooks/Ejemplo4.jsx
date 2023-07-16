// ejemplo para entender los props.children
import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de pros.children</h1>
            <h2>Nombre: { props.nombre }</h2>
            { props.children }
        </div>
    );
}

export default Ejemplo4;
