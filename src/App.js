import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [inputUsd, setInputUsd] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins((pre) => json);
        setLoading(false);
      });
  }, []);
  function onSubmit(event) {
    event.preventDefault();
    setInputUsd(false);
    setUsd(event.target[0].value);
    event.target[0].value = "";
  }
  function coinSelected(event) {
    event.preventDefault();
    setSelectedCoin((pre) => {
      return [...pre, event.target[0].value];
    });
  }
  function onClick(event) {
    event.target.value = "";
  }
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {inputUsd ? (
        <form onSubmit={onSubmit}>
          <input type="number" placeholder="input Your Budget"></input>
        </form>
      ) : loading ? (
        <strong>Loading...</strong>
      ) : (
        <form onSubmit={coinSelected}>
          <input
            onClick={onClick}
            type="text"
            list="list"
            placeholder="Search For coins"
          ></input>
        </form>
      )}

      <datalist id="list">
        {coins.map((item) => (
          <option>
            {item.name} ({item.symbol}) : {item.quotes.USD.price.toFixed(2)}USD
            You can buy {(usd / item.quotes.USD.price).toFixed(10)}
            {item.symbol}
          </option>
        ))}
      </datalist>

      <ul>
        {selectedCoin.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
