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

    recordClick_0 = currentState => {
        let newPokemonArr = [...currentState.pokemonArr];
        newPokemonArr[0].wasClicked = true;

        return { pokemonArr: [...newPokemonArr] };
    }

    shufflePokemonArr = currentState => {
        let newPokemonArr = [...currentState.pokemonArr];
        let shuffledArr = this.shuffleArr(newPokemonArr);

        return { pokemonArr: [...shuffledArr]};
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

    startGame = () => {
        this.setState({ gameStarted: true });
    }

    clickHandler_0 = () => {
        if (this.state.gameStarted === false) {
            this.startGame();
        }

        if (this.state.pokemonArr[0].wasClicked === false) {
            this.setState(this.incrementScore);
            this.setState(this.recordClick_0);
        } else {
            this.setState(this.gameOver);
        }
    }

    componentDidUpdate() {
        this.setState( this.shufflePokemonArr );
    }

    render() {
        console.log(this.state)

        // We need to shuffle an array of indexes, so that the cards will shuffle on re-render.
        // So first we need to make an array of indexes that are 
        //the same length as the pokemonArr, that way we can add more pokemon later on
        // So if we had 4 pokemon, then indexArr = [0,1,2,3]
        const indexArr = [];
        for (let i = 0; i < this.state.pokemonArr.length; i++) {
            indexArr.push(i);
        }

        // Now we need to shuffle that indexArr
        const shuffledIndexes = this.shuffleArr(indexArr);

        return (
            <div className='Pokegame'>
                <div className='Pokegame-instructions-container'>
                    <h1 id='Pokegame-instructions' className='title'>
                        {this.state.gameOver === true ? "You lose..." : ""}
                        {this.state.gameStarted ? `Score: ${this.state.score}` : "Don't click on the same Pokémon twice!"}
                    </h1>
                </div>
                <div className='Pokegame-row'>
                    {this.state.pokemonArr.map(item => {
                        <button className="Pokegame-button" onClick={this.clickHandler_0}>
                            
                        </button>
                    })}
                    {/* We need to put it in a button b/c onClick doesn't work if you don't */}
                    <button className="Pokegame-button" onClick={this.clickHandler_0}>
                        <Pokecard id={this.state.pokemonArr[shuffledIndexes[0]].id} alt={this.state.pokemonArr[shuffledIndexes[0]].name} />
                    </button>
                    <button className="Pokegame-button" onClick={this.clickHandler}>
                        <Pokecard id={this.state.pokemonArr[shuffledIndexes[1]].id} alt={this.state.pokemonArr[shuffledIndexes[1]].name} />
                    </button>
                    <button className="Pokegame-button" onClick={this.clickHandler}>
                        <Pokecard id={this.state.pokemonArr[shuffledIndexes[2]].id} alt={this.state.pokemonArr[shuffledIndexes[2]].name} />
                    </button>
                    <button className="Pokegame-button" onClick={this.clickHandler}>
                        <Pokecard id={this.state.pokemonArr[shuffledIndexes[3]].id} alt={this.state.pokemonArr[shuffledIndexes[3]].name} />
                    </button>
                </div>
                <div className='Pokegame-row'>
                    <button className="Pokegame-button" onClick={this.clickHandler}>
                        <Pokecard id={this.state.pokemonArr[shuffledIndexes[4]].id} alt={this.state.pokemonArr[shuffledIndexes[4]].name} />
                    </button>
                    <button className="Pokegame-button" onClick={this.clickHandler}>
                        <Pokecard id={this.state.pokemonArr[shuffledIndexes[5]].id} alt={this.state.pokemonArr[shuffledIndexes[5]].name} />
                    </button>
                    <button className="Pokegame-button" onClick={this.clickHandler}>
                        <Pokecard id={this.state.pokemonArr[shuffledIndexes[6]].id} alt={this.state.pokemonArr[shuffledIndexes[6]].name} />
                    </button>
                    <button className="Pokegame-button" onClick={this.clickHandler}>
                        <Pokecard id={this.state.pokemonArr[shuffledIndexes[7]].id} alt={this.state.pokemonArr[shuffledIndexes[7]].name} />
                    </button>
                </div>
            </div>
        );
    }
}

export default Pokegame;