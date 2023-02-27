import React from "react";
import quoteIcon from "assets/quote.png";
import Anchor from "components/Anchor";
import PageCenter from "components/PageCenter";
import ProgressiveImage from "components/ProgressiveImage";
import { Heading } from "components/Typography";
import style from "./style.scss";
import cn from "classnames";

const Side = ({ children, pdf, label, left, lower }) => (
  <Anchor
    href={pdf}
    className={cn(style.item, left ? style.left : style.right)}
  >
    <div className={cn(style.upper)}>{children}</div>
    {lower ? lower : <label> {label}</label>}
  </Anchor>
);

const HalfHalf = ({ quote, right }) => (
  <PageCenter contentClass={cn(style.content)}>
    <Side
      {...quote.link}
      left
      lower={
        <div className={cn(style.lower)}>
          <div className={cn(style.portrait)}>
            <img {...quote.image} />
            <div dangerouslySetInnerHTML={{ __html: quote.imageLabel }} />
          </div>
          <label> {quote.link.label}</label>
        </div>
      }
    >
      <img src={quoteIcon} />
      {quote.text}
    </Side>
    <Side {...right.link}>
      <Heading>{right.title}</Heading>
      {right.subtitle}
      <ProgressiveImage {...right.image} />
    </Side>
  </PageCenter>
);

export default HalfHalf;
