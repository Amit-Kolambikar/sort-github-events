import React, { Component } from 'react';
import FetchEvents from '../containers/fetchEvents'
class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchEvents />
      </div>
      );
  }
}

export default App;
