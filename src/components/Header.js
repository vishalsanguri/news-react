import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";

export default function Header({ setField }) {
  return (
    <div className="headerdiv">
      <div className="logodiv"></div>
      <div>
        <ul className="categorydiv" style={{ listStyle: "none" }}>
          <Link to="/">
            <li>CRICKET</li>
          </Link>
          <Link to="/basket">
            <li>BASKET BALL</li>
          </Link>
          <Link to="/soccer">
            <li>SOCCER</li>
          </Link>
          <Link to="/tennis">
            <li>TENNIS</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
