import React, { useState } from 'react';

// Login / Logout buttons
const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button style={{propStyle}} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={{propStyle}} onClick={logoutAction}>Logout</button>
    )
}

let red = 0;
let green = 200;
let blue = 100;

const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
}

const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}


// ? true => se renderiza la expresion
// ? false => no se renderiza la expresion

const OptionalRender = () => {
    
    const [access, setAccess] = useState(true);
    const [nMessages, setNMessages] = useState(0);
    
    /* const updateAccess = () => {
        setAccess(!access);
    } */

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    let optionalButton;

    /* if(access) {
        optionalButton = <button onClick={updateAccess}>Logout</button>
    } else {
        optionalButton = <button onClick={updateAccess}>Login</button>
    } */

    const LoginButton = ({loginAction}) => {
        return (
            <button onClick={loginAction}>Login</button>
        )
    }

    const LogoutButton = ({logoutAction}) => {
        return (
            <button onClick={logoutAction}>Logout</button>
        )
    }


    if(access) {
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    } else {
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    } 

    let addMessages = () => {
        setNMessages(nMessages + 1);
    }


    return (
        <div>
            {/* Optional Button */}
            { optionalButton }
            {/* N Messages unread */}
            { nMessages > 0 && nMessages == 1 && <p>You have { nMessages } new message.</p>}
            { nMessages > 1 && <p>You have { nMessages } new messages.</p>}
            { nMessages == 0 && <p>There are no new messages.</p>}
            {/* Operador Ternario */}
            {access ? (
                <div>


                
                </div>
            ) : null}
            { nMessages > 0 && nMessages == 1 ? <p>You have { nMessages } new message.</p> : <p>There are no new messages.</p>}
            { nMessages > 0 ? <p>You have { nMessages } new messages.</p> : <p>There are no new messages.</p>}
            <button onClick={ addMessages }>{nMessages === 0 ? "Add your first Message" : "Add new Message"}</button>
        </div>
    );
}

export default OptionalRender;
