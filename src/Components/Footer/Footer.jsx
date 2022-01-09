import React from "react";
import './Footer.css';
export default function Footer() {
  return (
    <footer>
        <h3 className="Footer_heading">
          Aeolus
        </h3>
        <ul id="footer-list">
          <li><a href="/">Home</a></li>
          <li><a href="/pollution">Check Pollution</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
    </footer>
  );
}