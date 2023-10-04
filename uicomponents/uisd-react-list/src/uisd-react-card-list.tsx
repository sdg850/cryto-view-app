import React, { useContext } from "react";
import { cryptosContext, ContextProps, cryptoData } from "@app/page";
import UICardItem from "./uisd-react-card-item";

export default function UiCardList(): JSX.Element {
  const { cryptos } = useContext<ContextProps>(cryptosContext);

  return (
    <div className="card-container ">
      {cryptos?.map((item: cryptoData) => (
        <UICardItem key={item.id + crypto.randomUUID()} {...item} />
      ))}
    </div>
  );
}
