import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Zook', age: 28 },
      { name: 'Riko', age: 46 },
      { name: 'Darv', age: 27 }
    ],
    otherState: 'Something else'
  });
    const switchNameHandler = () => {
      // console.log('Was clicked!')
      // DON"T DO THIS: this.state.persons[0].name = 'Zookster'
      setPersonsState({
        persons: [
          { name: 'Zookster', age: 28 },
          { name: 'Riko', age: 46 },
          { name: 'Darv', age: 32 }
        ]
      })
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: DMing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
  }

export default app;

