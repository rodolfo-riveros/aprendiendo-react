import React, {useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {
    //vamos a crear dos contadores diferentes
    //cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //vamos a crear una referencia con useState para asociarlo a una variable
    //con un elemento del DOM del componente (vista HTML)

    const miRef = useRef();

    function incrementar1() {
        setContador1( contador1 + 1);
    }

    function incrementar2() {
        setContador2( contador2 + 1);
    }

    //trabajando con UseEffect

    // caso 1
    // useEffect(() => {
    //     console.log('cambio en el estado del componente');
    //     console.log('mostrando referencia a elemento del DOM:');
    //     console.log(miRef);
    // })

    //caso 2
    // useEffect(() => {
    //     console.log('cambio en el estado del contador 1');
    //     console.log('mostrando referencia a elemento del DOM:');
    //     console.log(miRef);
    // }, [ contador1 ]);

    //caso 3
    useEffect(() => {
        console.log('cambio en el estado del contador 1 / contador 2');
        console.log('mostrando referencia a elemento del DOM:');
        console.log(miRef);
    }, [ contador1, contador2 ]);

    return (
        <div>
            <h1>Ejemplo de useState(), useRef(), useEffect()</h1>
            <h2>contador 1: { contador1 }</h2>
            <h2>contador 2: { contador2 }</h2>
            {/* elemento referenciado */}
            <h4 ref={ miRef }>Ejemplo de elemento referenciado</h4>
            {/* botones para cambiar los contadores */}
            <div>
                <button onClick={ incrementar1 }>Incrementar contador 1</button>
                <button onClick={ incrementar2 }>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
