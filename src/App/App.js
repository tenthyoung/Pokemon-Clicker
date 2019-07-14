import React from 'react';
import Pokegame from '../Pokegame/Pokegame'
import './App.css';

function App() {
  return (
    <div id="App">
      <div></div>
      <img id='App-title' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon logo" />
      <Pokegame/>
    </div>
  );
}

export default App;
