import React, {useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { RAZAS } from '../../models/razas.enum'

const Guerrero = ({nombre,raza,nivelDePoder,habilidades}) => {

    const [vida, setVida] = useState(100);
    const [stamina, setStamina] = useState(100);

    function bajarVida(daño) {
        setVida(vida - daño);
    }

    function bajarStamina(cansancio) {
        setStamina(stamina - cansancio);
    }

    return (
        <div>
            <h1>{ nombre }</h1>
            <h2>Raza: { raza } </h2>
            <h2>Nivel de Poder: { nivelDePoder } </h2>
            <h3>HP: { vida } / Stamina: { stamina }</h3>
            <button onClick={() => setVida(vida - 10)}>
                Ataca { nombre } !
            </button>
        </div>
    );
}

Guerrero.propTypes = {
    nombre: PropTypes.string,
    raza: PropTypes.instanceOf(RAZAS),
    nivelDePoder: PropTypes.number,
    habilidades: PropTypes.arrayOf(String)
}

export default Guerrero

