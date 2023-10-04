import * as React from "react";
import "../styles/styles.css";

export default function UiHeader({ children }) {
  return <h1 className="header-title">{children}</h1>;
}
