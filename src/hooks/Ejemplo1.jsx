import React, { useState} from 'react';

const Ejemplo1 = () => {

    //valor inicial para un contador
    const valorInicial = 0;

    //valor inicial para una persona
    const personaInicial = {
        nombre : 'Rodolfo',
        email : 'riveros@example.com',
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador() {
        setContador(contador + 1);
    }

    function actualizarPersona() {
        setPersona(
            {
                nombre : 'Pepe',
                email : 'pepe@example.com'
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo de useState()</h1>
            <h2>Contador: { contador }</h2>
            <h2>Datos de la persona:</h2>
            <h3>Nombre: { persona.nombre }</h3>
            <h3>Nombre: { persona.email}</h3>
            <button onClick={ incrementarContador }>Incrementador</button>
            <button onClick={ actualizarPersona }>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
