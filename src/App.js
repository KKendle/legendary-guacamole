import React, { Component } from 'react';
import './App.css';

import JobSearch from './containers/JobSearch/JobSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JobSearch />
      </div>
    );
  }
}

export default App;
