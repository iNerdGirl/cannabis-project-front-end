import React from 'react';
import {Navbar, Nav, NavItem, NavLink, NavbarBrand} from 'reactstrap';

const NavBar = () => {
  return <Navbar color="faded" light expand="md">
      <NavbarBrand href="/">Cannabis App</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/strains">Strains</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
      </Nav>
    </Navbar>;
}

export default NavBar;