import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';

function App() {
  const tours = useSelector(state => state.tours.tours)

  console.log(tours);
  
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
