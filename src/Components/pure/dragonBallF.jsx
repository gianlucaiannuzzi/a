import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DragonBallF = (props) => {

    //useState!!!
    //const [variable, metodo para actualizarlo] = useState(valor inicial)
    const [manga, setManga] = useState(252);
    const [anime, setAnime] = useState(400);

    const siguienteMes = () => {
        //actualiza el State
        setManga(manga + 1);
        setAnime(anime + 4);
    }


    return (
        <div>
            <h1>
                <b>Dragon Ball Trivia</b>
            </h1>

            <p>Personaje: {props.personaje}</p>
            <p>Transformacion: {props.transformacion + " " + props.numero}</p>
            <p>Manga {manga} / Anime: {anime}</p>

            <div> 
                <button onClick={siguienteMes}>
                    Pasa un mes!
                </button>
            </div>
        </div>
    );
};


DragonBallF.propTypes = {
    personaje: PropTypes.string,
    transformacion: PropTypes.string,
    numero: PropTypes.number
};


export default DragonBallF;
