import React from "react";

const CoinRow = ({ coin, index }) => {
  console.log(coin, index);
  return (
    <tr>
      <td>{index}</td>
      <td key={coin.name}>
        <img
          src={coin.image}
          style={{ width: "3%" }}
          className="img-fluid me-4"
        ></img>
        <span>{coin.name}</span>
        <span className="text-muted ms-3 text-uppercase">{coin.symbol}</span>
      </td>
      <td key={coin.current_price}>{coin.current_price}</td>
      <td
        key={coin.price_change_percentage_24h}
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.price_change_percentage_24h}
      </td>
      <td key={coin.total_volume}>{coin.total_volume}</td>
    </tr>
  );
};

export default CoinRow;
