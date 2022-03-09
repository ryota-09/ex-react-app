import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React練習問題</h1>
      <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link> |
        <Link to="/page1">Page1</Link> |
        <Link to="/page2">Page2</Link>
      </div>
      {/* <Router /> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
