/**
 * Ejemplo de uso del metodo de ciclo de vida en componente clase y el hook de ciclo de vida
 */

import React, { Component, useEffect } from 'react'

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log("Comportamiento antes de que el componente desaparezca.")
    }

  render() {
    return (
      <div>
        <h1>WillUnmount!</h1>
      </div>
    )
  }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        //Aqui no va ningun console.log
        return () => {
            console.log("Comportamiento antes de que el componente desaparezca.")
        };
    }, []);

    return (
        <div>
          <h1>WillUnmount!</h1>  
        </div>
    );
}

