import React from "react";
import { ICardType } from "../typing/declaration";
import "../styles/styles.css";

const UiCard = ({ children }: ICardType) => {
  return <div className="card-container">{children}</div>;
};

export default UiCard;
