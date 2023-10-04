import React from "react";
import { cryptoData } from "@app/page";
import "../styles/styles.css";
import UseLazyLoading from "@packages/uisd-react-lazy-loading/src/uisd-react-lazy-loading";

function UICardItem(data: cryptoData): JSX.Element {
  const { price_usd, name, symbol, price_btc } = data;

  return (
    <UseLazyLoading>
      <div className="card-item-container animation">
        <div className="card-item left">
          <span>{symbol}</span>
        </div>
        <div className="card-item center">
          <span className="card-item-title">{name}</span>
          <span className="card-item-description">{price_btc}</span>
        </div>
        <div className="card-item right">
          <span className="price-title">{"USD"}</span>
          <span className="price-value">{price_usd}</span>
        </div>
      </div>
    </UseLazyLoading>
  );
}

export default UICardItem;
