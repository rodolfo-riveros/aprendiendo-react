import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Contacto from '/laragon/www/hola-mundo/src/models/Contacto';

const ComponenteB = ({ contacto }) => {
    const [estaConectado, setEstaConectado] = useState(contacto.conectado);

const cambiarEstadoConectado = () => {
    setEstaConectado(!estaConectado);
};

return (
    <div>
        <p>{estaConectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</p>
        <button onClick={cambiarEstadoConectado}>
            {estaConectado ? 'Desconectar' : 'Conectar'}
        </button>
    </div>
    );
};

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
};

export default ComponenteB;