import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const CoinTable = ({ coins }) => {
  // const CoinList = () => {
  // const [coins, setCoins] = useState([]);

  // useEffect(() => {
  //   const fetchCoins = async () => {
  //     const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
  //     const data = await response.json();
  //     setCoins(data);
  //   };
  return (
    <TableContainer style={{
        marginLeft:200,
     
    }}>
      <Table>
        <TableHead>
          <TableRow >
            <TableCell>Name</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Price (USD)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {coins.map(coin => (
            <TableRow key={coin.id}>
              <TableCell>
                <img src={coin.image}
                style={{
                  width:20,marginRight:10
                }} />{coin.name}
                 </TableCell>
              <TableCell>{coin.symbol}</TableCell>
              <TableCell>{Math.round(coin.current_price)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CoinTable;