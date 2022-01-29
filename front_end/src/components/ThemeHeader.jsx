import React from "react";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ForumIcon from "@mui/icons-material/Forum";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import "./Header.css";
import './ThemeHeader.css'
import {Link} from 'react-router-dom';

function ThemeHeader() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-header">
        <div className="container">
          <Link to="/" className="navbar-brand center">
            <LocalLibraryRoundedIcon className="m-2"/>
            OnlinE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 ms-auto mb-lg-1 d-flex ">
             
              <li className="nav-item ms-3 m-auto">
              <Link to="/login" className="navbar-brand center">Login</Link>  
              </li>
              <li className="nav-item ms-3 ">
                <p className="nav-link m-auto">
                  <h6>|</h6>
                </p>
              </li>
              <li className="nav-item ms-3 m-auto">
              <Link to="/register" className="navbar-brand center">Register</Link> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ThemeHeader;
