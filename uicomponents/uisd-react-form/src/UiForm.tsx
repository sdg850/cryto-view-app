import React from "react";
import UiSearchBar from "../../../packages/uisd-react-searchbar/src/uisd-searchbar";
import "../styles/styles.css";
import { IFormProps } from "../typings/declaration.ts";

export default function UiForm({ children }: IFormProps) {
  return (
    <form className="form">
      <div className="form-search-container">
        <UiSearchBar placeHolder="Find Crypto" />
      </div>
      {children}
    </form>
  );
}
