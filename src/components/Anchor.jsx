import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "assets/right-arrow.svg";
import style from "./style.scss";
import cn from "classnames";

export const LinkButton = ({
  to,
  className,
  children,
  label,
  id,
  withArrow,
}) => (
  <Link {...{ to, id }} className={cn(style.anchor, className)}>
    {children || label} {withArrow && <RightArrow />}
  </Link>
);

export default ({
  className,
  href = "#",
  target = "_blank",
  label,
  download,
  children,
  withArrow,
  ...rest
}) => (
  <a
    className={cn(style.anchor, className)}
    target={href !== "#" ? target : null}
    {...{ href, download }}
    {...rest}
  >
    {children || label}
    {withArrow && <RightArrow />}
  </a>
);
