import React, {
  MouseEventHandler,
  createContext,
  useEffect,
  useState,
} from "react";

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
  handleFilterName: (value: string) => void;
  handlePagination: MouseEventHandler<HTMLButtonElement>;
}

export const CryptosContext = createContext<ContextProps>({
  cryptos: new Array<cryptoData>(),
  filterName: "",
  handleFilterName: () => "",
  handlePagination: () => 1,
});

export const CryptoProvider = ({ children }: { children: React.ReactNode }) => {
  const [filterName, setFilterName] = useState<string>();
  const [cryptos, setCryptos] = useState<cryptoData[]>([]);
  const [pagination, setPagination] = useState<number>(1);

  useEffect(() => {
    fetch(`https://api.coinlore.net/api/tickers/?start=${pagination}&limit=100`)
      .then((res) => res.json())
      .then((res) => setCryptos((prevData) => [...prevData, ...res.data]));
  }, [pagination]);

  const handleFilterName = (value: string): void => {
    setFilterName(value);
  };

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

  const providerValue: ContextProps = {
    cryptos: filtercryptosByName(cryptos),
    filterName,
    handleFilterName,
    handlePagination,
  };

  return (
    <CryptosContext.Provider value={providerValue}>
      {children}
    </CryptosContext.Provider>
  );
};
