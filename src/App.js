import { AccessoryCard } from './components/AccessoryCard';
import { EngravingBar } from './components/EngravingBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{flexFlow: 'row wrap'}}>
        <AccessoryCard/>
        <AccessoryCard/>
        <AccessoryCard/>
        <AccessoryCard/>
        <AccessoryCard/>
        <AccessoryCard/>
        <AccessoryCard/>
      </div>
      
      <EngravingBar/>
    </div>
  );
}

export default App;
