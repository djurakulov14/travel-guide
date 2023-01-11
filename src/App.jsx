import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import { HomePage } from './Components/HomePage';
import { InfoPage } from './Components/InfoPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info:id" element={<InfoPage />} />
		  </Routes>
    </div>
  );
}

export default App;
