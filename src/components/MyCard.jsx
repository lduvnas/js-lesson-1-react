import React from "react";

export default function MyCard(props) {
  return (
    <div class="card text-white bg-danger mb-3">
      <div class="card-header">{props.header}</div>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.content}</p>
      </div>
    </div>
  );
}
