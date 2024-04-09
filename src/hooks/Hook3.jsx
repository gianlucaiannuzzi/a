/**
 * EJEMPLO HOOKS:
 * useState, useContext!
 */

import React, {useState, useContext } from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener valor que recibe del padre
 */

const miContexto = React.createContext(null);

const Componente1 = () => {

    //Va a rellenarse con datos del padre
    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El token es {state.token}
            </h1>
            {/* Pintamos el Componente2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);
    
    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </div>
    );
}

export default function ComponenteConContexto() {

    const estadoInicial = {
        token: "12345678",
        sesion: 1
    }

    //Creamos estado de componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion() {
        setSessionData(
            {
                token: "babolingus",
                sesion: sessionData.sesion + 9
            }
        )
    }

    return (
        <miContexto.Provider value={sessionData}>
        {/*Todo lo de adentro puede leer los datos de SessionData!. Si se actualiza, los componentes tambien la actualizan!*/}
        <h1>Ejemplo de useState y useContext</h1>
        <Componente1></Componente1>
        <button onClick={ actualizarSesion }></button>
        </miContexto.Provider>
    );
}