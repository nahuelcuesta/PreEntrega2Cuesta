import React from "react";
import "./NavBar.modules.css";
import CardWidget from "../CardWidget/CardWidget";

export default function NavBar({img}) {
  return (
    <nav className="NavBarContainer">
      <div className="NavBarTitle">
        <img
          style={{ width: "15%" }}
          src={img}
          alt="Logo de la marca thempo"
        />
        <h1>thempo</h1>
      </div>
      <div className="NavBarButtonsContainer">
        <div className="NavBarButtons">
          <button>Classic</button>
          <button>Color</button>
          <button>Blog</button>
        </div>
        <CardWidget img={'./iconos/shopIcono.png'} />
      </div>
    </nav>
  );
}
