import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/home';
import Header from './components/Header/Header';

import "./App.css";

function App() {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    
  </Router>
  );
}

export default App;
