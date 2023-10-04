import * as React from "react";
import { IButtonProps } from "../typings/declaration";
import "../styles/index.css";

const UiButton = ({
  theme,
  size,
  children,
  onClick,
}: IButtonProps): JSX.Element => {
  return (
    <button className={`button ${theme} ${size}`} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default UiButton;
