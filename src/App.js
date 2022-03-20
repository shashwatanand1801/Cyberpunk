import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCards from './components/CollectionCard';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x4b068F3551b8097D38F3Ddfb089227e3811315fA&order_direction=asc'
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])

  return (
  <div className="app">
    <Header />
    {punkListData.length > 0 && (
      <>
        <Main 
          selectedPunk={selectedPunk}  
          punkListData={punkListData} 
        />
        <Punklist 
          punkListData={punkListData} 
          setSelectedPunk={setSelectedPunk}
        />
      </>
    )}
  </div>
  );
}

export default App;
