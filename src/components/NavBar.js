import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  Nav,
} from 'reactstrap';

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
    <NavItem>
      <Link className="nav-link" to="/admin-projects">Edit Portfolio</Link>
    </NavItem>
    </>
  );

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
        <a className='navbar-text' href='#aboutlink'>About &nbsp;</a>
        <a className='navbar-text' href='#technologieslink'>Technologies &nbsp;</a>
        <a className='navbar-text' href='#projectlink'>Portfolio &nbsp;</a>
        <a className='navbar-text' href='#connectlink'>Connect &nbsp;</a>
        { admin && authenticated() }
        </Nav>
        </Collapse>
      </Navbar>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any
};

export default NavBar;
