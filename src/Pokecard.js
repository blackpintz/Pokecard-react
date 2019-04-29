import React from 'react';
import './Pokecard.css';

let poke_api = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num)

class Pokecard extends React.Component {
    render () {
        let imgSrc = `${poke_api}${padToThree(this.props.id)}.png`
        return (
            <div className = "Pokecard-container">
            <h2>{this.props.name}</h2>
            <img className = "Pokecard-image" src = {imgSrc}></img>
            <div className = "Pokecard-data">Type: {this.props.type}</div>
            <div className = "Pokecard-data">EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard