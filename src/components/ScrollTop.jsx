import React, { useEffect, useState } from "react";
import Arrow from "assets/down-arrow.svg";
import style from "./style.scss";
import cn from "classnames";

export default ({}) => {
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset !== 0 && onTop) setOnTop(false);
      else if (window.pageYOffset === 0 && !onTop) setOnTop(true);
    };

    return () => (window.onscroll = null);
  });

  const scroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={cn(style.scrollTop, !onTop && style.visible)}
      onClick={() => scroll()}
    >
      <Arrow />
    </div>
  );
};
