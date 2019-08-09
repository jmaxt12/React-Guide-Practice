import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { name: 'Zook', age: 28 },
      { name: 'Riko', age: 46 },
      { name: 'Darv', age: 27 }
    ],
    otherState: 'Something else'
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked!')
    // console.log('Was clicked!')
    // DON"T DO THIS: this.state.persons[0].name = 'Zookster'
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Riko', age: 46 },
        { name: 'Darv', age: 32 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Zook', age: 28 },
        { name: event.target.value, age: 46 },
        { name: 'Darv', age: 32 }
      ]
    })
    }
  

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Zookster!!')}>Switch Name</button>
        <Person
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
        <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Zook!')}
            changed={this.nameChangedHandler}>My Hobbies: DMing</Person>
        <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
      </div>
    );
  }
}
export default App;