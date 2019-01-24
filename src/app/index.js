import React, { Component } from 'react';
import './App.css';
import AppLayout from './AppLayout'
import AppBar from './AppBar'
// import styled, { css } from 'styled-components'

class App extends Component {
  render() {
    return (
      <div>
        <AppLayout>
          <AppBar />
          Welcome to CryptoDash
        </AppLayout>
      </div>
    );
  }
}

export default App;
