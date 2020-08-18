import React from "react";

export default function MyList(props) {
  return (
    <div className="card">
      <div className="card-header">{props.heading}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.content}</li>
        <li className="list-group-item">{props.content}</li>
        <li className="list-group-item">{props.content}</li>
      </ul>
    </div>
  );
}
