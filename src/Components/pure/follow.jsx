import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Follow extends Component {

    constructor(props){
        super(props);
        this.state = {
            anime : 252,
            manga : 400
        }
    }

    render() {
        return (
            <div>
                <h1>
                    <b>Dragon Ball Trivia</b>
                </h1>

                <p>Personaje: {this.props.personaje}</p>
                <p>Transformacion: {this.props.transformacion + " " + this.props.numero}</p>
                <p>Manga {this.state.manga} / Anime: {this.state.anime}</p>

                <div> 
                    <button onClick={this.siguienteMes}>
                        Pasa un mes!
                    </button>
                </div>
            </div>
        );
    }

    siguienteMes = () => {
        //this.manga++; ASI NO SE ACTUALIZA LA VISTA
        this.setState(prevState =>
            (
                {
                    anime: prevState.anime + 4,
                    manga: prevState.manga + 1
                }
            )
        )
    }
}


Follow.propTypes = {
    personaje: PropTypes.string,
    transformacion: PropTypes.string,
    numero: PropTypes.number
};


export default Follow;
