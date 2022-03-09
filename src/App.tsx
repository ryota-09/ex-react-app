import React from "react";
import { BrowserRouter, Link, } from "react-router-dom";
import { Router } from "./router/Router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>React練習問題</h1>
        <div className="App">
          <Link to="/">Home</Link> |<Link to="/ex01">Ex01</Link> |
        </div>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
