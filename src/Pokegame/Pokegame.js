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
            score: 0,
            gameOver: false
        }
    }

    gameOver = () => {
        return { gameOver: true }
    }

    incrementScore = currentState => {
        return { score: currentState.score + 1 }
    }

    recordClick = index => currentState => {
        let newPokemonArr = [...currentState.pokemonArr];
        newPokemonArr[index].wasClicked = true;

        return { pokemonArr: [...newPokemonArr] };
    }

    shufflePokemonArr = currentState => {
        let newPokemonArr = [...currentState.pokemonArr];
        for (var i = newPokemonArr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = newPokemonArr[i];
            newPokemonArr[i] = newPokemonArr[j];
            newPokemonArr[j] = temp;
        }

        return { pokemonArr: [...newPokemonArr]};
    }

    startGame = () => {
        this.setState({ gameStarted: true });
    }

    clickHandler = index => e => {
        if (this.state.gameStarted === false) {
            this.startGame();
        }

        this.setState( this.shufflePokemonArr );


        if (this.state.pokemonArr[index].wasClicked === false) {
            this.setState(this.incrementScore);
            this.setState(this.recordClick(index));
        } else {
            this.setState(this.gameOver);
        }
    }

    render() {
        return (
            <div className='Pokegame'>
                <div className='Pokegame-instructions-container'>
                    <h1 id='Pokegame-instructions' className='title'>
                        {this.state.gameOver === true ? "You lose..." : ""}
                        {this.state.gameStarted ? `Score: ${this.state.score}` : "Don't click on the same Pokémon twice!"}
                    </h1>
                </div>
                <div className='Pokegame-row'>
                    {this.state.pokemonArr.map((item,index) => {
                        return (
                            <button className="Pokegame-button" onClick={this.clickHandler(index)}>
                                <Pokecard id={item.id} alt={item.name} />
                            </button>
                        )
                    })}
                    {/* We need to put it in a button b/c onClick doesn't work if you don't */}
                </div>
            </div>
        );
    }
}

export default Pokegame;