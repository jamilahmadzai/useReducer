import React from "react";

function Album({ id, title }) {
  return (
    <div className="item-container">
      <h1>{id}</h1>
      <h1>{title}</h1>
    </div>
  );
}

export default Album;
