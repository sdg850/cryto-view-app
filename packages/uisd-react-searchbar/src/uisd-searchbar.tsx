import React, { useContext } from "react";
import "../styles/index.css";
import { CryptosContext, ContextProps } from "@providers/crypto-api-provider";
import type { searchTypes } from "../typing/declaration.d.ts";

const UiSearchBar = ({ placeHolder }: searchTypes) => {
  const { filterName, handleFilterName } =
    useContext<ContextProps>(CryptosContext);

  return (
    <input
      className="searchbar"
      placeholder={placeHolder}
      value={filterName}
      onChange={(e) => handleFilterName(e.target.value)}
    />
  );
};

export default UiSearchBar;
