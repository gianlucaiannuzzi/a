/**
 * Ejemplo de uso del metodo de ciclo de vida en componente clase y el hook de ciclo de vida
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log("Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado.")
    }

  render() {
    return (
      <div>
        <h1>DidUpdate!</h1>
      </div>
    )
  }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log("Comportamiento antes de que el componente sea añadido al DOM o se renderice.");
    })

    return (
        <div>
          <h1>DidUpdate!</h1>  
        </div>
    );
}


