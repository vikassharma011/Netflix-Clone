import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import {ImSearch} from "react-icons/im";
import "./Header.css";

const Header = () => {
  console.log(logo);
  return (
    <nav className="header">
      <img src={logo} alt="logo" />
      <div>
        <Link to="/tvshows" style={{ color: 'white', textDecoration: 'none',fontSize:20 }} >TV Shows</Link>
        <Link to="/movies" style={{ color: 'white', textDecoration: 'none' ,fontSize:20}}>Movies</Link>
        <Link to="/watchlist" style={{ color: 'white', textDecoration: 'none',fontSize:20 }}>Recently Added</Link>
        <Link to="/account" style={{ color: 'white', textDecoration: 'none',fontSize:20 }}>My List</Link>
      </div>
      <ImSearch />
    </nav>
  );
};

export default Header;
