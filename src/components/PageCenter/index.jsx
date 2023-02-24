import React from "react";
import style from "./style.scss";
import cn from "classnames";

const PageCenter = ({ image, children, rootClass, contentClass, id }) => (
  <div id={id} className={cn(style.root, rootClass)}>
    {image && image}
    <div className={cn(style.content, contentClass)}>{children}</div>
  </div>
);

export default PageCenter;
