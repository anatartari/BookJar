import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: #000;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 80%;
  padding: 0 50px;
`;
export const NavLogo = styled.h1`
  color: #fff;
  justify-self: center;
  cursor: pointer;
  font-family: "Merriweather Sans", sans-serif;
  font-size: 28px;
  display: flex;
  align-items: flex-end;
  font-weight: 400;
  text-decoration: none;
  margin-bottom: 22px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #eb4365;
  }
`;
