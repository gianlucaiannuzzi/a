/**
 * Componente que va a obtener un formulario para 
 * autenticacion de usuarios.
 */

import React, { useState } from 'react';

const LoginForm = () => {

    const credencialesIniciales = [
        {
            user: "",
            password: ""
        }
    ];

    const [credenciales, setCredenciales] = useState(credencialesIniciales);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
