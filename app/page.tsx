"use client";
import React, { createContext, useEffect, useState } from "react";
import UiForm from "@uicomponents/uisd-react-form/src/UiForm";
import UiCardList from "@uicomponents/uisd-react-list/src/uisd-react-card-list";
import type { Dispatch, MouseEventHandler, ReactElement } from "react";
import UiHeader from "@packages/uisd-react-header/src/UiHeader";
import styles from "./page.module.css";
import UiButton from "@packages/uisd-react-buttons/src/uisd-react-button";
import {
  UIsdButtonSize,
  UIsdButtonTheme,
} from "../packages/uisd-react-buttons/typings/declaration.d.ts";

const URL = "https://api.coinlore.net/api/tickers/";

export interface cryptoData {
  id?: string;
  symbol?: string;
  name?: string;
  nameid?: string;
  rank?: number;
  price_usd?: string;
  percent_change_24h?: string;
  percent_change_1h?: string;
  percent_change_7d?: string;
  market_cap_usd?: string;
  volume24?: string;
  volume24_native?: string;
  csupply?: string;
  price_btc?: string;
  tsupply?: string;
  msupply?: string;
}

export interface cryptosList {
  data?: Array<cryptoData>;
}

export interface ContextProps {
  cryptos: Array<cryptoData> | null;
  filterName: string | undefined;
  setFilterName: Dispatch<React.SetStateAction<string | undefined>>;
}

export const cryptosContext = createContext<ContextProps>({
  cryptos: new Array<cryptoData>(),
  filterName: "",
  setFilterName: () => undefined,
});

function Home(): ReactElement {
  const [filterName, setFilterName] = useState<string>();
  const [cryptos, setCryptos] = useState<cryptoData[]>([]);
  const [pagination, setPagination] = useState<number>(1);

  useEffect(() => {
    fetch(`https://api.coinlore.net/api/tickers/?start=${pagination}&limit=100`)
      .then((res) => res.json())
      .then((res) => setCryptos((prevData) => [...prevData, ...res.data]));
  }, [pagination]);

  const handlePagination: MouseEventHandler<HTMLButtonElement> = (e): void => {
    setPagination((prev) => prev + 100);
  };

  const filtercryptosByName = (cryptos: cryptoData[]): cryptoData[] => {
    if (filterName == undefined) {
      return [...cryptos];
    }
    const filtervalue = cryptos.filter((item) => {
      return item.name?.toLowerCase().includes(filterName);
    });

    return filtervalue;
  };

  return (
    <cryptosContext.Provider
      value={{
        cryptos: filtercryptosByName(cryptos),
        filterName,
        setFilterName,
      }}
    >
      <div className={styles.maincontainer}>
        <UiHeader>{"Crypto View"}</UiHeader>
        <UiForm />
        <UiCardList />
        <UiButton
          theme={UIsdButtonTheme.SUCCESS}
          size={UIsdButtonSize.LARGE}
          onClick={handlePagination}
        >
          {"More Cryptos"}
        </UiButton>
      </div>
    </cryptosContext.Provider>
  );
}

export default Home;
