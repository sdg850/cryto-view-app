import React, { useContext } from "react";
import {
  CryptosContext,
  ContextProps,
  cryptoData,
} from "@providers/crypto-api-provider";
import UICardItem from "./uisd-react-card-item";

export default function UiCardList(): JSX.Element {
  const { cryptos } = useContext<ContextProps>(CryptosContext);

  return (
    <div className="card-container ">
      {cryptos?.map((item: cryptoData) => (
        <UICardItem key={item.id + crypto.randomUUID()} {...item} />
      ))}
    </div>
  );
}
