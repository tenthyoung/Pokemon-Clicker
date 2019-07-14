import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {


    render() {
        // We need to make things easier to read
        
        const leftPaddedNum = (num => {
            let paddedNum = '';
            if (num < 10) {
                paddedNum = `00${num.toString()}`;
            } else if (num < 100) {
                paddedNum = `0${num.toString()}`;
            } else {
                paddedNum = num.toString();
            }
            
            return paddedNum;
        })(this.props.id);

        return (
            <div className='Pokecard'>
                <img className='Pokecard-img' 
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${leftPaddedNum}.png`} 
                alt={this.props.alt} 
                />
            </div>
        )
    }
}

// <h2>{this.props.name}</h2>
// <img src={this.props.img}/>
// <p>Exp:{this.props.experience}</p>

export default Pokecard;