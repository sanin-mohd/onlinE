import React from "react";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ForumIcon from "@mui/icons-material/Forum";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import "./Header.css";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand center">
            <LocalLibraryRoundedIcon />
            OnlinE
          </Link>
          
          
          <form className="d-flex col-md-6 ms-2">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
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
            <ul className="navbar-nav mb-2 ms-auto mb-lg-1 d-flex">
              <li className="nav-item ms-3 ">
                <Link to="/dashboard" className="nav-link">
                  <Tooltip title="Dashboard">
                    <AccountCircleIcon />
                  </Tooltip>
                </Link>
              </li>

              <li className="nav-item ms-3 ">
                <Link to="/" className="nav-link">
                  <Tooltip title="Messages">
                    <ForumIcon />
                  </Tooltip>
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link to="/" className="nav-link">
                  <Tooltip title="Wallet">
                    <AccountBalanceWalletIcon/>
                  </Tooltip>
                  <span className='ms-1'>₹2500</span>
                </Link>
              </li>

              <li className="nav-item ms-3 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  more
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                  </li>
                  <li>
                    <a className="dropdown-item">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
