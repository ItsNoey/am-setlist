/** @format */

import React from "react";
import logo from "./assets/am-logo.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="Arctic Monkeys logo" className="nav--logo" />

        <h4 className="nav--title">
          <span className="nav--band-name">ARCTIC MONKEYS </span>LIVE IN BANGKOK
          2023
        </h4>
      </nav>
    </header>
  );
}
