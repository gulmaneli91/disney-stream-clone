import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Login from "./components/Login";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element= {<Login />} />
          <Route path="/home" element= {<Home />} />
          <Route path="/details/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
