import React from "react";
import PageCenter from "components/PageCenter";
import { Heading } from "components/Typography";
import Button from "components/Button";
import Anchor from "components/Anchor";
import style from "./style.scss";
import cn from "classnames";

const Download = ({ title, desktop, mobile, image, body }) => (
  <PageCenter contentClass={cn(style.content)}>
    <div className={cn(style.top)}>
      <div className={cn(style.text)}>
        <Heading>{title}</Heading>
        <div className={cn(style.buttons)}>
          <Anchor href={desktop.pdf} download={true} target="_blank">
            <Button>{desktop.label}</Button>
          </Anchor>
          <Anchor href={mobile.pdf} download={true} target="_blank">
            <Button>{mobile.label}</Button>
          </Anchor>
        </div>
      </div>
      <img {...image} />
    </div>
    <p>{body}</p>
  </PageCenter>
);

export default Download;
