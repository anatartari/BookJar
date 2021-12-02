import { useState } from "react";
import React from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from "./navbarEelements";

import { makeStyles } from "@material-ui/styles";
import BookClose from "../../assets/icons/book_closed.svg";
import Search from "../../assets/icons/search.svg";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  menuItem: {
    backgroundColor: "black",
    color: "white",
  },
});

const NavBar = ({ toggle }) => {
  const classes = useStyles();
  const userId = localStorage.getItem("@bookjar/userId");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">BookJar</NavLogo>

          <NavMenu>
            <NavItem>
              <NavLinks to="/search">
                <img className="nav-icon__search" src={Search} />
              </NavLinks>
            </NavItem>
            <NavItem>
              <button className="menu-btn" onClick={handleClick}>
                <img className="nav-icon__book-close" src={BookClose} />
              </button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Link className="link" to={`/${userId}`}>
                  <MenuItem className={classes.menuItem} onClick={handleClose}>
                    Perfil
                  </MenuItem>
                </Link>
                <Link className="link" to="/edit-user">
                  <MenuItem className={classes.menuItem} onClick={handleClose}>
                    Editar perfil
                  </MenuItem>
                </Link>
                <Link className="link" to="/register-book">
                  <MenuItem className={classes.menuItem}>
                    Adicionar livro
                  </MenuItem>
                </Link>

                <MenuItem className={classes.menuItem} onClick={handleClose}>
                  Sair dessa conta
                </MenuItem>
              </Menu>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
