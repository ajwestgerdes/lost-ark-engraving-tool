import { AccessoryCard } from './components/AccessoryCard';
import { EngravingBar } from './components/EngravingBar';
import { AbilityStone } from './components/AbilityStone';
import { EngravingBooks } from './components/EngravingBooks';
import { StatsBar } from './components/StatsBar';
import { AccessoryValues } from '../../util/constants';
import { useState } from 'react';
import { AccessoryContext } from '../../util/Context';

function EngravingCalculator() {
  const [accessoryContext, setAccessoryContext] = useState(AccessoryValues)
  return (
    <AccessoryContext.Provider value={{accessoryContext}}>
    <div style={{display: 'flex', width: '100%', height: '100%'}} className="App">
      <div style={{ width: '50%', display: 'flex', flexWrap: 'wrap' }}>
        <AccessoryCard accessory={'necklace'}  title={'Necklace'} img="./assets/images/relic-ring.jpg"/>
        <AccessoryCard accessory={'earring1'}  title={'Earring'}/>
        <AccessoryCard accessory={'earring1'}  title={'Earring'}/>
        <AccessoryCard accessory={'ring1'}  title={'Ring'}/>
        <AccessoryCard accessory={'ring2'}  title={'Ring'}/>
        <AbilityStone accessory={'abilityStone'} title={'Ability Stone'}/>
        <EngravingBooks accessory={'books'}  title={'Books'}/>
      </div>
      <div style={{display: 'flex', width: '50%'}}>
        <StatsBar />
        <EngravingBar/>
      </div>  
    </div>
    </AccessoryContext.Provider> 
  );
}

export default EngravingCalculator;
