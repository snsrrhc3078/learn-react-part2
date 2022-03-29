import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins((pre) => json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <input type="text" list="list" placeholder="Search For coins"></input>
      )}

      <datalist id="list">
        {coins.map((item) => (
          <option>
            {item.name} ({item.symbol}) : {item.quotes.USD.price.toFixed(2)}USD
          </option>
        ))}
      </datalist>
    </div>
  );
}

export default App;
