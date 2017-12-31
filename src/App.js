import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinearGradient from 'react-native-web-linear-gradient'

let syles = {
  container: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3451',
    // backgroundImage: `linear-gradient(to bottom, ${"#f2323f"} 0%, ${"#f2ff3f"}
    // 100%)`,
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{
          flex: 1,
          position: 'absolute',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#2C3451',
        }}>
          <p style={{
            fontSize: 18,
            fontFamily: 'Gill Sans',
            textAlign: 'center',
            margin: 10,
            color: '#ffffff',
            backgroundColor: 'transparent',
          }}>
            Sign in with Facebook
</p>
        </LinearGradient>
      </div>
    );
  }
}


export default App;
