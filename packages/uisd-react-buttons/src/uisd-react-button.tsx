import * as React from "react";
import { IButtonProps } from "../typings/declaration.ts";
import { CryptosContext } from "@providers/crypto-api-provider";

import "../styles/index.css";

const UiButton = ({ theme, size, children }: IButtonProps): JSX.Element => {
  const { handlePagination } = React.useContext(CryptosContext);
  return (
    <button
      className={`button ${theme} ${size}`}
      onClick={() => handlePagination()}
    >
      {children}
    </button>
  );
};

export default UiButton;
