import React from 'react';

const Hook4 = (props) => {
    return (
        <div>
            <h1> Ejemplo de CHILDREN PROPS </h1>
            <h2>
                Nombre: {props.nombre}
            </h2>
            {/* props.children pintara por defecto lo que se encuentre entre
            etiquetas de apertura y cierre desde el componente de orden superior.
            */}
            {props.children}
        </div>
    );
}

export default Hook4;
