import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef("")
    const nameRef = useRef("")

    function pulsarBoton(){
        const text = messageRef.current.value;
        alert(text);
    }

    function pulsarBotonParametros(text){
        alert(`Text: ${ text }`);
    }

    function submitName(e){
        e.preventDefault(); //Para que no se actualice la pagina al enviar
        update(nameRef.current.value);
    }

    return (
        <div style={{background: "cyan", padding: "30px"}}>
            <p onMouseOver={() => console.log("Moviendo el mouse por encima.")}>Hello, { name  }</p>
            <button onClick={() => console.log("Presionado Boton 0")}>Boton 0</button>
            <button onClick={pulsarBoton}>Boton 1</button>
            <button onClick={() => pulsarBotonParametros("Hello")}>Boton 2</button>
            <input 
                placeholder='Envia un texto a tu padre' 
                onFocus={() => console.log("Puse el focus aca.")}
                onChange={(e) => console.log("Cambia el valor: ", e.target.value)}
                onCopy={() => console.log("Copiado el valor.")}
                ref = {messageRef}
            ></input>
            <button onClick={() => send(messageRef.current.value)}>
                Enviar mensaje!
            </button>
            <div style={{marginTop: "20px"}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='Nuevo Formulario'></input>
                    <button type="submit">Actualizar formulario</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
