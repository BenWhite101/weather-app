import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: 'init',
      isLoaded: false,
      weatherData: null
    }
  }


  render() {
    return (
      <div className="App">
       here is app
      </div>
    );
  }
}

export default App;
