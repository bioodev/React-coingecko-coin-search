import React from "react";
import CoinRow from "./CoinRow";

const titles = ["#", "Coin", "Price", "Price change", "24h volume"];

const TableCoins = ({ coins, search }) => {
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            {titles.map((title, index) => (
              <td key={index}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin, index) => (
            <CoinRow coin={coin} key={index} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCoins;
