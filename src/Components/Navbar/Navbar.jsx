import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
  return (
    <header>
      <nav>
        <h3 className="Logo_name">
          Aeolus
        </h3>
        <div className="Navbar_linkDiv">
          {/* the colors I used in the mockup are there in the app.css file as a comment  */}
            <Link className="Navbar_link" to="/">Home</Link>
            <Link className="Navbar_link" to="/pollution">Check Pollution</Link>
            <Link className="Navbar_link" to="/about">About us</Link>
          {/* 
           */}
        </div>
      </nav>
    </header>
  );
}