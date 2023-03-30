import React, { Component } from 'react';
import './App.css';
import myImg from './myImg.png';

// Transform the App.js into a class-based component
class App extends Component {
  // define a state object that contains the person object 
  // and a showPerson boolean to toggle the display of the person's profile. 
  // We also initialize mountedTime to 0 in the state.
  state = {
    person: {
      fullName: 'Fatima-Ezzahra',
      bio: 'Hi, how are you? I m Fatima-ezzahra Elfahimi, I m 28 years old, I m JS developper. I have a daughter, She is 2 years old....',
      imgSrc: myImg,
      profession: 'JavaScript Developer',
    },
    showPerson: false,
    mountedTime: 0,
  };
  // In the componentDidMount method, we use setInterval to update the 
  // mountedTime state every second. We store the 
  // interval ID in the component instance variable intervalId.

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime});
    }, 1000);
  }
  
  // In the componentWillUnmount method, 
  // we clear the interval using the clearInterval method to avoid memory leaks.
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // define a handleToggle method that toggles the showPerson state when the button is clicked.
  handleToggle = () => {
    this.setState({ showPerson: !this.state.showPerson });
      this.intervalId = setInterval(() => {
        this.setState({ mountedTime: this.state.mountedTime + 1});
      }, 1000);
  };

  // in the render method, we use destructuring to extract the person and showPerson properties from 
  // the state. We conditionally render the person's 
  // profile using the showPerson state, and display the mountedTime state in a paragraph element.
  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { showPerson, mountedTime } = this.state;

    return (
      <div className="App">
        <button className='btn' onClick={this.handleToggle}>Toggle Person</button>
        {showPerson && (
          <div className='content'>
            <div><img className='mypic' src={imgSrc} alt={fullName} /></div>
            <div className='paragraph'>
            <h1 className='fullname'>{fullName}</h1>
            <h2 className='profession'>{profession}</h2>
            <p className='bio'>{bio}</p>
            </div>
          </div>
        )}
        <p className='time'>Mounted Time: {mountedTime}s</p>
      </div>
    );
  }
}

export default App;
