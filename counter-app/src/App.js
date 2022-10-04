import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
export default function App() {
  return (
    <div className="container bg-light p-2 my-5">
      <Header />
      <Main />
    </div>
  );
}
