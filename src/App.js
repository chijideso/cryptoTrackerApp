import React from 'react';
import  { useState, useEffect, } from 'react';
import CoinTable from './components/CoinTable ';
import SearchBar from './components/SearchBar ';
import Pagination from './components/Pagination ';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [coinsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCoins = async () => {
      // const response = await fetch('https://api.coinlore.net/api/tickers/');
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
      const data = await response.json();
      setCoins(data);
     console.log(data)
    };
    fetchCoins();
  }, []);

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCoins = filteredCoins.slice(
    currentPage * coinsPerPage,
    (currentPage + 1) * coinsPerPage
  );

  return (
    <div style={{
      width:800
    }}>
      <h1 style={{color:'green',paddingLeft:300, fontFamily: 'Poppins',textAlign:'center'}}>Crypto Tracker App</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <CoinTable coins={currentCoins} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCoins={filteredCoins.length}
        coinsPerPage={coinsPerPage}
      />
    </div>
  );
};

export default App;

