import React from 'react'
import PropTypes from 'prop-types'
import Guerrero from './guerrero'

function Torneo() {
  return (
    <div>
        <div>
            <Guerrero nombre="Vegeta" raza="SAIYAN" nivelDePoder="150000" habilidades='["Big Bang Attack", "Patada al Esternon"]'></Guerrero>
            <Guerrero nombre="Majin Buu" raza="MONSTRUO" nivelDePoder="200000" habilidades='["Choco Milk", "Absorcion Suprema"]'></Guerrero>
        </div>
    </div>
  )
}

export default Torneo

