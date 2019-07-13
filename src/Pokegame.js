import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokegame.css';

class Pokegame extends Component {
    render() {
        const pokemonArr = [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ];
        const versusImage = 'https://ui-ex.com/images/vs-transparent-versus-1.png';
        const team1 = [];
        const team2 = [];
        let pointDifference = 0;

        // We need to shuffle the array
        const shuffledArr = (array => {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }

            return array;
        })(pokemonArr);

        console.table(shuffledArr);

        // WARNING: THIS DOESN'T WORK FOR AN ODD NUMBER OF POKENON
        // WARNING: THIS DOESN'T ACCOUNT FOR A TIE
        const winner = (array => {
            let team1Points = 0;
            let team2Points = 0;

            for (let i = 0; i < array.length / 2; i++) {
                team1.push(array[i]);
                team1Points += array[i].base_experience;
            }
            console.log('Team 1:', team1Points);

            for (let i = array.length / 2; i < array.length; i++) {
                team2.push(array[i]);
                team2Points += array[i].base_experience;
            }
            console.log('Team 2:', team2Points);

            pointDifference = team1Points - team2Points;
            
            if (pointDifference < 0) {
                pointDifference *= -1;
            }

            return team1Points > team2Points ? 1 : 2;
        })(shuffledArr);

        console.log(winner);
        console.table(team1);
        console.table(team2);

        return (
            <div className='Pokegame'>
                <h1 id='Pokegame-winner-title' className='title'>
                Don't click on the same Pokémon twice!
                </h1>
                <div className='Pokegame-team-row'>
                    {team1.map(item =>
                        <Pokecard
                            id={item.id}
                            name={item.name}
                            type={item.type}
                            base_experience={item.base_experience}
                        />
                    )}
                </div>
                <div className='Pokegame-team-row'>
                {team2.map(item => 
                    <Pokecard 
                        id={item.id} 
                        name={item.name} 
                        type={item.type} 
                        base_experience={item.base_experience} 
                    />
                )}
                </div>
            </div>
        );
    }
}

export default Pokegame;