import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from 'react';
import satData from './components/satData';


function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))]; 
  /*  
    spread operator converts the new Set object into an array
    new Set() creates a new Set object, which removes duplicates from its collection
    satData.map() will iterate over the satData array
    for each element of the satData, we return the values associated with orbitType keys
  */

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };

  return (
    <div>
      <Banner />
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat}/>
    </div>
  );
}

export default App;