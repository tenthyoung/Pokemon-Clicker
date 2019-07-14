import React, { Component } from 'react';
import Pokecard from '../Pokecard/Pokecard';
import './Pokegame.css';

class Pokegame extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pokemonArr: [
                { id: 4, name: 'Charmander', wasClicked: false },
                { id: 7, name: 'Squirtle', wasClicked: false },
                { id: 11, name: 'Metapod', wasClicked: false },
                { id: 12, name: 'Butterfree', wasClicked: false },
                { id: 25, name: 'Pikachu', wasClicked: false },
                { id: 39, name: 'Jigglypuff', wasClicked: false },
                { id: 94, name: 'Gengar', wasClicked: false },
                { id: 133, name: 'Eevee', wasClicked: false }
             ],
             gameStarted: false,
             score: 0
        }
    }

    shuffleArr = array => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    clickHandler = e => {
        alert('beep boop');
    }
    

    render() {
        // We need to shuffle an array of indexes, so that the cards will shuffle on re-render.
        // So first we need to make an array of indexes that are 
        //the same length as the pokemonArr, that way we can add more pokemon later on
        // So if we had 4 pokemon, then indexArr = [0,1,2,3]
        const indexArr = [];
        for ( let i = 0; i < this.state.pokemonArr.length; i++ ) {
            indexArr.push(i);
        }

        // Now we need to shuffle that indexArr
        const shuffledIndexes = this.shuffleArr(indexArr);

        return (
            <div className='Pokegame'>
                <div className='Pokegame-instructions-container'>
                    <h1 id='Pokegame-instructions' className='title'>
                        {this.state.gameStarted ? `Score: ${this.state.score}` : "Don't click on the same Pokémon twice!"}
                    </h1>
                </div>
                <div className='Pokegame-row'>
                    <Pokecard onClick={this.clickHandler} id={this.state.pokemonArr[shuffledIndexes[0]].id} alt={this.state.pokemonArr[shuffledIndexes[0]].name} />
                    <Pokecard id={this.state.pokemonArr[shuffledIndexes[1]].id} alt={this.state.pokemonArr[shuffledIndexes[1]].name} />
                    <Pokecard id={this.state.pokemonArr[shuffledIndexes[2]].id} alt={this.state.pokemonArr[shuffledIndexes[2]].name} />
                    <Pokecard id={this.state.pokemonArr[shuffledIndexes[3]].id} alt={this.state.pokemonArr[shuffledIndexes[3]].name} />
                </div>
                <div className='Pokegame-row'>
                    <Pokecard id={this.state.pokemonArr[shuffledIndexes[4]].id} alt={this.state.pokemonArr[shuffledIndexes[4]].name} />
                    <Pokecard id={this.state.pokemonArr[shuffledIndexes[5]].id} alt={this.state.pokemonArr[shuffledIndexes[5]].name} />
                    <Pokecard id={this.state.pokemonArr[shuffledIndexes[6]].id} alt={this.state.pokemonArr[shuffledIndexes[6]].name} />
                    <Pokecard id={this.state.pokemonArr[shuffledIndexes[7]].id} alt={this.state.pokemonArr[shuffledIndexes[7]].name} />
                </div>

            </div>
        );
    }
}

export default Pokegame;