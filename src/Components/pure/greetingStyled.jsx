import React, { useState } from 'react';
//Defino estilos en constantes:

// ? Estilo para usuario logueado
const loggedStyle = {
    color: "blue"
}

// ? Estilo para usuario no logueado
const unloggedStyle = {
    color: "tomato",
    fontWeight: "bold"
}

const GreetingStyled = (props) => {

    //Se genera estado para controlar el login del usuario
    const [logged, setLogged] = useState(false);
    const greetingUser = () => (<p>Hola, { props.name } </p>);
    const pleaseLogin = () => (<p>Please login</p>);

    return (
        <div style={logged ? loggedStyle : unloggedStyle }>
            { logged ? greetingUser() : pleaseLogin()}
            <button onClick={() => {
                console.log("Boton pulsado");
                setLogged(!logged);
            }}>
                { logged ? "Logout" : "Login" }
            </button>
        </div>
    );
}

export default GreetingStyled;
