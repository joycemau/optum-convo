import React from "react";
import Anchor from "components/Anchor";
import Button from "components/Button";
import PageCenter from "components/PageCenter";
import ProgressiveImage from "components/ProgressiveImage";
import { Heading } from "components/Typography";
import style from "./style.scss";
import cn from "classnames";

const Banner = ({ image, title, button }) => (
  <PageCenter rootClass={cn(style.root)} contentClass={cn(style.container)}>
    <div className={cn(style.banner)}>
      <Heading className={cn(style.heading)}>
        {title}
        {button && (
          <Anchor href={button.pdf}>
            <Button>{button.label}</Button>
          </Anchor>
        )}
      </Heading>
      <div className={cn(style.imgdiv)} />
      <ProgressiveImage {...image} />
    </div>
  </PageCenter>
);

export default Banner;
