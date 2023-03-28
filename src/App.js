import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CraftingCalculator from './pages/Crafting/CraftingCalculator';
import EngravingCalculator from './pages/Engravings/Engravings';
import Roster from './pages/Roster/Roster';
import Header from './pages/Header'

function App() {
    return (
      <div className='App'>
        <Header />
        <Routes>
          <Route index element={<Roster />} />
          <Route path='crafting' element={<CraftingCalculator />} />
      </Routes>
      </div>
    );
  }

export default App;
