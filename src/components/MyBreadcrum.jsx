import React from "react";

export default function MyBreadcrum(props) {
  return (
    <nav aria-label="breadcrumb dark bg-dark">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="www.lovaduvnas.se">{props.link}</a>
        </li>
        <li class="breadcrumb-item">
          <a href="www.lovaduvnas.se">{props.link}</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {props.link}
        </li>
      </ol>
    </nav>
  );
}
