/**
 * Ejemplo de componente de tipo clase que dispone de los metodos 
 * de ciclo de vida.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Lifecycle extends Component {
    constructor(props) {
        super(props)
        console.log("CONSTRUCTOR: Cuando se instancia el componente.");
    }

    componentWillMount() {
        console.log("WILLMOUNT: Antes del montaje del componente.");
    }

    componentDidMount() {
        console.log("DIDMOUNT: Justo al del montaje del componente, antes de renderizarlo.");
    }

    componentWillReceiveProps() {
        console.log("WILLRECEIVEPROPS: Si va a recibir nuevas props.")
    }

    shouldComponentUpdate() {
        /**
         * Controlar si el componente debe o no actualizarse
         * No actualizar la vista en determinados casos
         */
        // return true / false
    }

    componentWillUpdate() {
        console.log("WILLUPDATE: Justo antes de actualizarse.")
    }
    }

    componentDidUpdate() {
        console.log("DIDUPDATE: Justo despues de actualizarse.")
    }

    componentWillUnmount() {
        console.log("WILLUNMOUNT: Justo antes de desaparecer.")

    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}


Lifecycle.propTypes = {

};


export default Lifecycle;
