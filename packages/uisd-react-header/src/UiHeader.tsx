import * as React from "react";
import "../styles/styles.css";

export default function UiHeader({ children }: { children: React.ReactNode }) {
  return <h1 className="header-title">{children}</h1>;
}
