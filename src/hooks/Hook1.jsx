/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo funcion y acceder a su estado privado
 * a traves de un hook y, ademas, poder modificarlo.
 * 
 */

import React, { useState } from 'react';

const Hook1 = () => {

    //Valor inicial para un contador
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial = {
        nombre: "Babingo",
        apellido: "Johnson"
    }

    //Queremos que estos sean parte del estado del componente!
    //Que el cambio se vea reflejado en la vista

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /*
    * Funcion para actualizar el estado privado que tiene el contador
    */
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
    */
    function actualizarPersona() {
        setPersona(
            {
                nombre: "Tilingo",
                apellido: "Pistaccio"
            }
        )
    }

    return (
        <div>
            <h1>
                Ejemplo de useState()
            </h1>
            <h2>
                Contador: {contador}
            </h2>
            <h2>
                Persona: {persona.nombre + " " + persona.apellido}
            </h2>
            <div>
                <button onClick={ incrementarContador }>
                    Aumentar Contador
                </button>
                <button onClick={ actualizarPersona }>
                    Aumentar Persona
                </button>
            </div>
        </div>
    );
}

export default Hook1;
