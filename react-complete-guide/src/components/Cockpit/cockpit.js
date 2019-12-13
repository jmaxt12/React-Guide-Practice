import React, { useEffect, useRef } from 'react';

import classes from './cockpit.css';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);


    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      // HTTP request...
      // setTimeout(() => {
      //   alert('Saved data to cloud');
      // }, 1000);
      toggleBtnRef.current.click();
      return () => {
        console.log('[cockpit.js] cleanup workin in useEfect')
      }
    }, []);

    useEffect(() => {
      console.log('[cockpit.js] 2nd useEffect');
      return () => {
        console.log('[cockpit.js] cleanup work in 2nd useEffect')
      }
    })

    // useEffect();

    const assignedClasses = [];
    let btnClass = '';
    btnClass = classes.Green;
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return ( 
        <div className= {classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
              Toggle Persons
            </button>
        </div>
     );
}
 
export default React.memo(cockpit);