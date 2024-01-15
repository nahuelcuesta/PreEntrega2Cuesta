import React from "react";
import "./CardWidget.modules.css"

export default function ({img}) {
  return (
    <div className="CarWidgetContainer">
      <img src={img} alt="Icono bolsa de compras" />
      <p>0</p>
    </div>
  );
}
