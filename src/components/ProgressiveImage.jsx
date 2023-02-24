import React, { useEffect, useState } from "react";

const ProgressiveImage = ({
  src,
  placeholder,
  alt = "",
  width,
  height,
  className,
}) => {
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => setCurrentSrc(src);
    setLoading(false);
  }, []);

  return (
    <img
      src={currentSrc}
      style={{
        opacity: loading ? 0.5 : 1,
        transition: "opacity .15s linear",
      }}
      {...{ alt, width, height, className }}
    />
  );
};

export default ProgressiveImage;
