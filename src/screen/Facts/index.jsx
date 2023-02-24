import React from "react";
import iconEnum from "assets/icons";
import PageCenter from "components/PageCenter";
import { Heading } from "components/Typography";
import style from "./style.scss";
import cn from "classnames";

export const Icon = ({ icon }) => (
  <span>{React.createElement(iconEnum[icon])}</span>
);

const Facts = ({ title, items }) => (
  <PageCenter rootClass={cn(style.root)} contentClass={cn(style.content)}>
    <Heading type={"h2"}>{title}</Heading>
    <div className={cn(style.items)}>
      {items.map(({ icon, label, sublabel }, i) => (
        <div key={i} className={cn(style.iconText)}>
          <Icon icon={icon} />
          <Heading type={"h3"} className={cn(style.label)}>
            {label}
          </Heading>
          {sublabel}
        </div>
      ))}
    </div>
  </PageCenter>
);

export default Facts;
