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
                { id: 133, name: 'Eevee', wasClicked: false },
                { id: 151, name: 'Mew', wasClicked: false },
                { id: 54, name: 'Psyduck', wasClicked: false },
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
        console.log("Index (recordClick):" + index)
        console.log("current state:" + currentState)
        let newPokemonArr = [...currentState.pokemonArr];
        newPokemonArr[index].wasClicked = true;

        return { pokemonArr: [...newPokemonArr] };
    }

    removeClicks = currentState => {
        let newPokemonArr = [...currentState.pokemonArr];

        for (let i = 0 ; i < newPokemonArr.length ; i++ ) {
            if (newPokemonArr[i].wasClicked >= 1) {
                newPokemonArr[i].wasClicked = false;
            }
        }
        console.log("Clicks removed",newPokemonArr);

        return { pokemonArr: [...newPokemonArr ]};
    }

    replay = () => {
        this.setState({ gameStarted: false, score: 0, gameOver: false });

        this.setState( this.removeClicks );
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
        console.log("Index:" + index)
        if (this.state.gameStarted === false) {
            this.startGame();
        }
        
        if ( this.state.pokemonArr[index].wasClicked === false ) {
            this.setState(this.incrementScore);
            this.setState(this.recordClick(index));
            this.setState( this.shufflePokemonArr );
        } else {
            this.setState(this.gameOver);
        }

    }

    render() {
        return (
            <div className='Pokegame'>
                <div id='Pokegame-instructions-container'>
                    <h1 id='Pokegame-instructions' className='title'>
                        {this.state.gameOver === true && this.state.score != 10 ? "You lose..." : ""}
                        {this.state.score === 10 ? "You Win!" : ""}
                        {this.state.gameStarted ? `Score: ${this.state.score}` : "Don't click on the same Pokémon twice!"}
                    </h1>
                </div>
                <div className={`Pokegame-row ${this.state.gameOver || this.state.score === 10 ? "is-hidden" : ""}`}>
                    {this.state.pokemonArr.slice(0,4).map((item,index) => {
                        return (
                            <button className="Pokegame-button" key={index} onClick={this.clickHandler(index)}>
                                <Pokecard id={item.id} alt={item.name} />
                            </button>
                        )
                    })}
                </div>
                <div className={`Pokegame-row ${this.state.gameOver || this.state.score === 10 ? "" : "is-hidden"}`}>
                    <button className="Pokegame-replay-btn btn-hover color-11" onClick={this.replay}>
                        Replay
                    </button>
                </div>
                <div className={`Pokegame-row ${this.state.gameOver || this.state.score === 10 ? "is-hidden" : ""}`}>
                    {this.state.pokemonArr.slice(4,8).map((item,index) => {
                        return (
                            <button className="Pokegame-button" key={index+4} onClick={this.clickHandler(index+4)}>
                                <Pokecard id={item.id} alt={item.name} />
                            </button>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Pokegame;