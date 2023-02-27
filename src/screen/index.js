import React, { useEffect } from "react";
import OptumLogo from "assets/optum-logo.svg";
import Button from "components/Button";
import PageCenter from "components/PageCenter";
import ScrollTop from "components/ScrollTop";
import { Heading } from "components/Typography";
import Banner from "./Banner";
import Download from "./Download";
import Facts from "./Facts";
import HalfHalf from "./HalfHalf";
import data from "./data";
import style from "./style.scss";
import cn from "classnames";
import Anchor from "components/Anchor";

const Screen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <ScrollTop />
      <PageCenter
        rootClass={cn(style.header_root)}
        contentClass={cn(style.header)}
      >
        <OptumLogo />
        {data.header}
      </PageCenter>
      <Banner {...data.banner} />
      <Facts {...data.facts} />
      <Download {...data.download} />
      <HalfHalf {...data.halfhalf} />
      <PageCenter
        rootClass={cn(style.visit_root)}
        contentClass={cn(style.visit)}
      >
        <Heading type={"h3"} className={cn(style.text)}>
          {data.visit.label}
        </Heading>
        <Anchor href={data.visit.button.url}>
          <Button>{data.visit.button.label}</Button>
        </Anchor>
      </PageCenter>
      <PageCenter
        rootClass={cn(style.footer_root)}
        contentClass={cn(style.footer)}
      >
        <div dangerouslySetInnerHTML={{ __html: data.footer }} />
        <label>{data.copyright}</label>
      </PageCenter>
    </div>
  );
};

export default Screen;
