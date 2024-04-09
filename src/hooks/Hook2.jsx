/**
 * Usos de:
 * -useState()
 * *useRef() identificar valores y elementos dentro de la vista
 * -useEffect() cambiar la vista
 */

import React, { useState, useRef, useEffect } from 'react';

const Hook2 = () => {

    //Creamos dos contadores distintos, cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Creamos referencia con useRef para asociar una variable
    //Con un elemento del DOM (vista HTML)
    //En vez de usar jQuery (yo sabia usar esto)
    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);
    }

    function incrementar2() {
        setContador2(contador2 + 1);
    }

    /**
     *  Trabajando con useEffect!!
     * ? Caso 1: Ejecutar SIEMPRE snippet de codigo
     *  Cada vez que haya cambio en estado!!!
     *  Se ejecuta lo que este dentro del useEffect (evento?)
     * useEffect(() => {
        console.log("Cambio en estado del componente");
        console.log("Mostrando referencia a elemento de DOM");
        console.log(miRef);
        })
     */

    /**
         *  Trabajando con useEffect!!
         * ? Caso 2: Ejecutar SOLO si cambia CONTADOR1
         */
    useEffect(() => {
        console.log("Cambio en estado del componente");
        console.log("Mostrando referencia a elemento de DOM");
        console.log(miRef);
    }, [contador1, contador2])

    return (
        <div>
             <h1>
                Ejemplo de useState(), useRef() y useEffect()
            </h1>
            <h2>
                Contador 1: {contador1}
            </h2>
            <h2>
                Contador 2: {contador2}
            </h2>
            <h4 ref={miRef}>
                Ejemplo de referencia
            </h4>
            <div>
                <button onClick={ incrementar1 }>
                    Aumentar Contador1
                </button>
                <button onClick={ incrementar2 }>
                    Aumentar Contador2
                </button>
            </div>
        </div>
    );
}

export default Hook2;
