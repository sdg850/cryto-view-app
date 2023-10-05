import React, { useContext } from "react";
import "../styles/index.css";
import { CryptosContext } from "@app/page";
import type { searchTypes } from "../typing/declaration.d.ts";

const UiSearchBar = ({ placeHolder }: searchTypes) => {
  const { filterName, setFilterName } = useContext(CryptosContext);

  return (
    <input
      className="searchbar"
      placeholder={placeHolder}
      value={filterName}
      onChange={(e) => setFilterName(e.target.value)}
    />
  );
};

export default UiSearchBar;
