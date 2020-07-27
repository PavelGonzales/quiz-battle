import React from 'react';
// Styles
import './App.css';
// Screens
import MainScreen from './screens/Main';
import FindScreen from './screens/Find';

function App() {
  const isFinding = false;

  return (
    <div className="App">
      {
        isFinding ? <FindScreen /> : <MainScreen />
      }
    </div>
  );
}

export default App;
