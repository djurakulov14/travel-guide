import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout';
import { HomePage } from './pages/HomePage';
import { InfoPage } from './pages/InfoPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
