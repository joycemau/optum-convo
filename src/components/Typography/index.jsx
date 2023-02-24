import React from "react";
import scss from "./style.scss";
import cn from "classnames";

export const Heading = ({
  type,
  className,
  weight,
  centered,
  children,
  style,
}) => (
  <div
    className={cn(
      scss.default,
      type === "h2"
        ? scss.h2
        : type === "h3"
        ? scss.h3
        : type === "h4"
        ? scss.h4
        : type === "h5"
        ? scss.h5
        : scss.h1,
      centered && scss.centered,
      className
    )}
    style={{ fontWeight: weight, ...style }}
  >
    {children}
  </div>
);
