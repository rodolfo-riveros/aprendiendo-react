import React from 'react';
import PropTypes from 'prop-types';
import Contacto from '/laragon/www/hola-mundo/src/models/Contacto';

const ComponenteA = ({ contacto }) => (
    <div>
        <h2>{contacto.nombre} {contacto.apellido}</h2>
        <p>{contacto.email}</p>
    </div>
);

ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
};

export default ComponenteA;