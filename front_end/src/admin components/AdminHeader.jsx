import React from "react";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ForumIcon from "@mui/icons-material/Forum";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {Link} from 'react-router-dom';

function AdminHeader() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-header">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <LocalLibraryRoundedIcon className="m-2"/>
            OnlinE Admin Login
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default AdminHeader;
