import React from "react";

export default function MyNavbar({ title }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">{title}</span>
    </nav>
  );
}
