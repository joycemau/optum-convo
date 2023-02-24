import React from "react";
import { BrowserRouter } from "react-router-dom";
import Screen from "screen";
import style from "theme/root.scss";
import cn from "classnames";

const App = () => (
  <BrowserRouter>
    <div className={cn(style.app)}>
      <Screen />
    </div>
  </BrowserRouter>
);

export default App;
