import React from 'react';
import "./LoggedLayout.scss";

export function LoggedLayout(props) {
  const { children } = props;

  return (
    <div className="logged-layout">
      <div className="logged-layout__content">
        <div className="logged-layout__left-menu">
          <p>LEFT MENU</p>
        </div>

        <div className="logged-layout__children-content">
          <div className="logged-layout__top-bar">
            <p>TOP BAR</p>
          </div>
          <div>{children}</div> 
        </div>
      </div>   
      <div className="logged-layout__footer">
        <p>FOOTER</p>
      </div> 
    </div>
  );
}