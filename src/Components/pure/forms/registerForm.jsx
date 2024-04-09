/**
 * Componente que va a obtener un formulario para 
 * autenticacion de usuarios.
 */

import React, { useState } from 'react';

const RegisterForm = () => {

    const dataInicial = [
        {
            user: "",
            nanme: "",
            email: "",
            password: ""
        }
    ];

    const [data, setData] = useState(dataInicial);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
