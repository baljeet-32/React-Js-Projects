import React, { useState } from "react";
import Home from "./Home";
import Sidebar from "./Sidebar";

export default function Main() {
  const [count, setCount] = useState(0);
  const HandleInc = () => {
    setCount(count + 1);
  };
  const HandleDec = () => {
    setCount(count - 1);
  };
  const HandleReset = () => {
    setCount(0);
  };
  return (
    <div className="container d-flex align-items-center justify-content-center ">
      <Sidebar
        HandleDec={HandleDec}
        HandleInc={HandleInc}
        HandleReset={HandleReset}
      />
      <Home count={count} />
    </div>
  );
}
