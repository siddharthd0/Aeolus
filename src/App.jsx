import React from 'react';
import {BrowserRouter as Router,  Route, Routes} from "react-router-dom";
//please check the navbar.jsx file and there is a issue 
import './App.css';
import Home from './Pages/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
function App() {
  return (
    <Router>
    <div id="parent-div">
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      
      
    </div>
    <Footer/>
    </Router>
  );
}

export default App;