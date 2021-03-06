import { AccessoryCard } from './components/AccessoryCard';
import { EngravingBar } from './components/EngravingBar';
import './App.css';

function App() {
  return (
    <div style={{display: 'flex', width: '100%', height: '100%'}} className="App">
      <div style={{ width: '50%', display: 'flex', flexWrap: 'wrap' }}>
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
