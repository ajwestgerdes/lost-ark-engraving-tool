import React from "react";
import { Routes, Route } from "react-router-dom";
import CraftingCalculator from "./pages/Crafting/CraftingCalculator";
import EngravingCalculator from "./pages/Engravings/Engravings";
import AuctionSplit from "./pages/Auction/AuctionSplit"
import Header from './pages/Header'

function App() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<EngravingCalculator />} />
          <Route path='crafting' element={<CraftingCalculator />} />
          <Route path='split' element={<AuctionSplit/>} />
      </Routes>
      </div>
    );
  }

export default App;
