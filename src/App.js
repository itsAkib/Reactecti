
// import { ReactDOM } from 'react';
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Courese from './Component/Courese';
import Downloads from './Component/Downloads'
import Navigation from './Component/Navigation';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Home/> 
      <courese/>
      <About/>
      <Downloads/>
      <Contact/>

         <Routes>
          <Route path="./Component/Home"  element={<Home/>}/>
          <Route path="./Component/courese"  element={<Courese/>}/>
          <Route path="./Component/About"  element={<About/>}/>
          <Route path="./Component/Downloads"  element={<Downloads/>}/>
          <Route path="./Component/Contact"  element={<Contact/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
