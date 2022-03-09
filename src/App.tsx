import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>React練習問題</h1>
        <div className="App">
          <Link to="/">Home</Link> |
          <Link to="/ex01">Ex01</Link> |
          <Link to="/ex31">Ex31</Link> |
          <Link to="/ex50">Ex50</Link> |
          <Link to="/ex60">Ex60</Link> |
          <Link to="/ex70">Ex70</Link> |
          <Link to="/ex80">Ex80</Link> |
        </div>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
