import React from 'react';
import "./Pokedex.css"
import "./Pokecard.css"
import Pokecard from './Pokecard';

class Pokedex extends React.Component {
    render () {
        
        return (
            <div className = "Pokedex">
            <div className = "Pokecard">
            {this.props.pokemon.map((p) => {
                return <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
            })}
            </div>
            </div>
        )
    }
}


export default Pokedex