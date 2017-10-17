import React from 'react'

import {Navbar, Nav, NavItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'


const Header= () => (
	<Navbar inverse collapseOnSelect>
    <Navbar.Header>
      	<Navbar.Brand>
        	<a href="/">DrinkIt</a>
      	</Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
     	<LinkContainer to='/all_drinks'>
         	<NavItem eventKey={1}>AllDrinks</NavItem>
        </LinkContainer>
        <LinkContainer to='/choose_ingredients'>
        	<NavItem eventKey={2} href="#">Choose Ingredients</NavItem>
        </LinkContainer>
		<LinkContainer to='/random_drink'>
       		<NavItem eventKey={2} href="#">Random Drink</NavItem>
        </LinkContainer>
        <LinkContainer to='/user'>
        	<NavItem eventKey={2} href="#">User</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )

export default Header