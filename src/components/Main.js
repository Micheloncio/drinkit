import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import AllDrinks from './AllDrinks'
import ChooseIngredients from './ChooseIngredients'
import RandomDrink from './RandomDrink'
import User from './User'

const Main = () => (
	<div className="Main">
		<Switch>
			<Route exact path='/' component= {Home}></Route>
			<Route path='/all_drinks' component= {AllDrinks}></Route>
			<Route path= '/choose_ingredients' component= {ChooseIngredients}></Route>
			<Route path= '/random_drink' component= {RandomDrink}></Route>
			<Route path= '/user' component= {User}></Route>
		</Switch>
	</div>
	)

export default Main