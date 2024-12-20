import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">
            <img src="" alt="" />
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <a href="/"></a>
            </li>
            <li>
              <a href="/aboutme"></a>
            </li>
            <li>
              <a href="/projects"></a>
            </li>
            <li>
              <a href="/technologies"></a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
