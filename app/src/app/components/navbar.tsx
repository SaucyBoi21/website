import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutme">About Me</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/technologies">Technologies</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
