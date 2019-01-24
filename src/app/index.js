import React, { Component } from 'react';
import './App.css';
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import { AppProvider } from './AppProvider'

class App extends Component {
  render() {
    return (
      <div>
        <AppLayout>
          <AppProvider>
            <AppBar />
            <p>Welcome to CryptoDash</p>
          </AppProvider>
        </AppLayout>
      </div>
    );
  }
}

export default App;
