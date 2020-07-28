import React, { useState } from 'react';
// Styles
import './App.css';
// Screens
import MainScreen from './screens/Main';
import FindScreen from './screens/Find';

function App() {
  const [isFinding, setIsFinding] = useState(true);

  setTimeout(() => {
    setIsFinding(false);
  }, 3000)

  return (
    <div className="App">
      {
        isFinding ? <FindScreen /> : <MainScreen />
      }
    </div>
  );
}

export default App;
