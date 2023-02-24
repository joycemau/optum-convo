import React from "react";
import style from "./style.scss";
import cn from "classnames";

export default ({
  children,
  className,
  disabled,
  onClick,
  type = "button",
  backgroundColor,
  color,
  to,
  ...rest
}) => (
  <button
    className={cn(style.button, className)}
    style={{
      backgroundColor: backgroundColor,
      color: color,
    }}
    {...{ disabled, onClick, type }}
    {...rest}
  >
    {children}
  </button>
);
