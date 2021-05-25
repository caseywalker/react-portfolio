import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar
       color="light"
       light expand="md"
       className="sticky-top navbar-dark bg-dark">
        <NavbarBrand href="/">Casey Walker</NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
        <a className='navbar-text' href='/'>Home &nbsp;</a>
        <a className='navbar-text' href='/#aboutlink'>About &nbsp;</a>
        <a className='navbar-text' href='/#technologieslink'>Technologies &nbsp;</a>
        <a className='navbar-text' href='/#projectlink'>Portfolio &nbsp;</a>
        <a className='navbar-text' href='/#connectlink'>Connect </a>
        </Nav>
        </Collapse>
      </Navbar>
  );
};

export default NavBar;
