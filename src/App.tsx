import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
    <Login/>
  </Router>
    </div>
  );
}

export default App;
