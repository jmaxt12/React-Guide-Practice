import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Jake" age="28"/>
        <Person name="Adam" age="27"/>
        <Person name="Riko" age="46">My Hobbies: Dungeon Mastering</Person>
      </div>
    );
  }
}

export default App;
