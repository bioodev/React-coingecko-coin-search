import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import TableCoins from "./components/TableCoins";

function App() {
  const [coins, setCoins] = useState([]);

  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
    );
    setCoins(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div>
          <input
            className="text-light form-control bg-dark border-0 mt-4 mb-4 text-center"
            type="text"
            placeholder="Search a Coin"
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <TableCoins coins={coins} search={search} />
        <span className="text-center mt-3 mb-3">bioodev - zurdao</span>
      </div>
    </div>
  );
}

export default App;
