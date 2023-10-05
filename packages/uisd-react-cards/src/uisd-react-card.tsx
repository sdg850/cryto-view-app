import React from "react";
import { ICardType } from "../typing/declaration.ts";
import "../styles/styles.css";

const UiCard = ({ children }: ICardType) => {
  return <div className="card-container">{children}</div>;
};

export default UiCard;
