import type { MouseEventHandler } from "react";

export interface IButtonProps {
  theme: string;
  size: string;
  children?: JSX.Element | string;
  onClick?: () => void;
}

export enum UIsdButtonTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  INFO = "info",
  DANGER = "danger",
  WARNING = "warning",
  DARK = "dark",
  LIGHT = "light",
  LINK = "link",
}

export enum UIsdButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  FULLCONTENT = "full-content",
}
