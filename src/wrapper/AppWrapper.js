import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrapper = (Component, idName, ClassNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${ClassNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@2023 VICTORIIA</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapper;
