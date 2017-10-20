import React from 'react'

import {Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'

import './Header.css'




const Header= () => (
	<Navbar inverse collapseOnSelect className='headerfix'>
    <Navbar.Header>
      	<Navbar.Brand>
        <div>
        <img src='./logo.jpg'/>
        	<Link to="/home"><strong>Drink It</strong></Link>
          </div>
      	 </Navbar.Brand>
          <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
     	  <LinkContainer to='/all_drinks'>
         	<NavItem className="navItem" eventKey={1}>AllDrinks</NavItem>
        </LinkContainer>
        <LinkContainer to='/choose_ingredients'>
        	<NavItem className="navItem" eventKey={2} href="#">Choose Ingredients</NavItem>
        </LinkContainer>
		    <LinkContainer to='/random_drink'>
       		<NavItem className="navItem" eventKey={2} href="#">Random Drink</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )

export default Header