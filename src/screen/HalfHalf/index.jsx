import React from "react";
import quoteIcon from "assets/quote.png";
import Anchor from "components/Anchor";
import PageCenter from "components/PageCenter";
import ProgressiveImage from "components/ProgressiveImage";
import { Heading } from "components/Typography";
import style from "./style.scss";
import cn from "classnames";

const HalfHalf = ({ quote, right }) => (
  <PageCenter contentClass={cn(style.content)}>
    <div className={cn(style.item, style.left)}>
      <img src={quoteIcon} />
      {quote.text}
      <Anchor href={quote.link.pdf}>{quote.link.label}</Anchor>
    </div>
    <div className={cn(style.item, style.right)}>
      <Heading>{right.title}</Heading>
      {right.subtitle}
      <ProgressiveImage {...right.image} />
      <Anchor href={right.link.pdf}>{right.link.label}</Anchor>
    </div>
  </PageCenter>
);

export default HalfHalf;
