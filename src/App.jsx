import React from 'react';
import {BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
function App() {
  return (
    <div id="parent-div">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;