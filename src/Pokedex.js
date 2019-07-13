import React, { Component } from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css';


class Pokedex extends Component {
    render() {

        return (
            <div id='Pokedex-container'>
                {arr.map(item => 
                    <Pokecard 
                        id={item.id} 
                        name={item.name} 
                        type={item.type} 
                        base_experience={item.base_experience} 
                    />
                )}
            </div>
        );
    }
}

export default Pokedex;