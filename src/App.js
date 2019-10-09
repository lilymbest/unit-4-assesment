/*Dependencies */
import React, { Component } from 'react';
/* Styling */
import './App.css';
/* Components */
import Circles from './components/Circles/Circles'
import CircleSelector from './components/CircleSelector/CircleSelector'


class App extends Component {
  constructor() {
    super()
    this.state = {
      selected: '1',
    }
  this.onChange = this.onChange.bind(this)
  }

  onChange = (newSelection) =>{
    this.setState({
    selected: newSelection
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
          selected={this.state.selected}
          onChange={this.onChange}
          />
          <Circles 
          selected={this.state.selected}
          />
        </main>
      </div>
    );
  }

}

export default App;