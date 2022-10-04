import React from "react";

export default function Sidebar(props) {
  return (
    <div className="sidebar mx-2 d-flex flex-column p-2">
      <button
        className="btn btn-success my-2 btn-width"
        onClick={props.HandleInc}
      >
        {" "}
        +{" "}
      </button>
      <button
        className="btn btn-danger my-2 btn-width"
        onClick={props.HandleDec}
      >
        -
      </button>
      <button
        className="btn btn-warning my-2 btn-width"
        onClick={props.HandleReset}
      >
        Reset
      </button>
    </div>
  );
}
