import React from "react";
import shopIcono from "../../assets/iconos/shopIcono.png";
import "./CardWidget.modules.css"

export default function () {
  return (
    <div className="CarWidgetContainer">
      <img src={shopIcono} alt="Icono bolsa de compras" />
      <p>0</p>
    </div>
  );
}
