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

const useStyles = makeStyles({
  menuItem: {
    backgroundColor: "black",
    color: "white",
  },
});

const NavBar = ({ toggle }) => {
  const classes = useStyles();

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
              <NavLinks to="#">
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
                <MenuItem className={classes.menuItem} onClick={handleClose}>
                  Perfil
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleClose}>
                  Editar perfil
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleClose}>
                  Adicionar livro
                </MenuItem>
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
