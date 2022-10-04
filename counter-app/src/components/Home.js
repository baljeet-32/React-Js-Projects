import React from "react";

export default function Home(props) {
  return (
    <div className="sidebar  text-center d-flex align-items-center justify-content-center my-1">
      <h1>{props.count}</h1>
    </div>
  );
}
