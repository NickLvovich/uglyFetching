import React, {Component} from 'react';
import './App.css';
import FetchInput from './Components/FetchInput';

class App extends Component {
  render() {
    return(
      <div className="main-container">
        <FetchInput/>
      </div>
    )
  }
}
export default App;