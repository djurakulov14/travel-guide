import React from 'react';
import { Route, Routes} from 'react-router-dom';
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
          <Route path="/info/:id" element={<InfoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
