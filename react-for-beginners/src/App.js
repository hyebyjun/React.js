import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((reponse) => reponse.json())
      .then((json) => {
        setCoins(json);
        setLoading(false); // data loading을 마쳤으므로
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
