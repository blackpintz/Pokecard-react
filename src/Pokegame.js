import React from 'react';
import "./Pokegame.css"
import Pokedex from "./Pokedex"

let shuffleArray = (arr) => {
    let newIndex,
        temp
for(let i = arr.length - 1; i > 0; i--) {
    newIndex = Math.floor(Math.random() * (i + 1));
    temp     = arr[i];
    arr[i]   = arr[newIndex] ;
    arr[newIndex] = temp
}
return arr;
}
let pokeArray = (myArray, sizeOfArray) => {
    let newArray = shuffleArray(myArray);
    let tempArray = []
    let part_arr;
    let i = 0;
    
    for(i=0; i<=newArray.length-1; i+=sizeOfArray){
        part_arr = newArray.slice(i, i+ sizeOfArray)
        tempArray.push(part_arr)
    }
    return tempArray;
}

class Pokegame extends React.Component {
    render () {
        const pokemon = [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
            ]
            let divArray = pokeArray(pokemon, 4)
            let total    = 0;
            let total2   = 0
            divArray[0].forEach((arr) => {
                total += arr.base_experience
                return total
            })
            divArray[1].forEach((arr) => {
                total2 += arr.base_experience
                return total2
            })
            
        
        return (
            <div>
            <h1 className = "Pokegame-h1">Pokedex</h1>
            {divArray.map((arr) => {
                return <Pokedex pokemon = {arr} total={total} total2={total2}/>
            })}
            <div>
            {total > total2 ? <h1 className = "Pokegame-h1">The first hand wins with {total} points!</h1>: <h1 className = "Pokegame-h1">The second hand wins with {total2} points!</h1> }
            </div>
            </div>
        )
    }
}

export default Pokegame