import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <Link href="/pages/about"> about </Link>
      <Link href="/pages/projects"> projects </Link>
      <Link href="/pages/technologies"> technologies </Link>
    </>
  );
}