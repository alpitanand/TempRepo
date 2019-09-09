import React from "react";
import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import Zomato from "./Container/Zomato/Zomato";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Zomato />
    </BrowserRouter>
  );
}

export default App;
