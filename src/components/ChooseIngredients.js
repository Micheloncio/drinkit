import React, {Component} from 'react'
import cocktailsApi from '../services/cocktailsApi'
import Home from './Home'
import CarouselImg from './CarouselImg'

import './ChooseIngredients.css'

import { cloneArray } from '../utils'
import Search from './choose_ing_components/Search'
import SelectedIngredients from './choose_ing_components/SelectedIngredients'
import CocktailCard from './CocktailCard'



class ChooseIngredients extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			arrayIngredients: [],
			textSearch:'',
			ingredientsSelected: [],
			drinksState:[],
			cocktailState: {},
			cocktailName: '',
			lgShow: false
		}
	}

	changeTextSearch = (e) => { 
		this.setState ({
			textSearch: e.target.value
		})
	}

	getAllIngredients = (e,txt) =>{
		e.preventDefault()
		const _txt = txt.toLowerCase()
		const arrayIngredients = []

		cocktailsApi.getAllIngredients()
		.then(res=>{
			res.map(elem=>{
				if(elem.strIngredient1.toLowerCase().indexOf(_txt)!==-1)
				{
					arrayIngredients.push(elem.strIngredient1)
				}
			})
			this.setState({
				arrayIngredients
			})
		})
	}
	
    searchByIngredient = (e) => 
    {
        e.preventDefault()

        if (this.state.ingredientsSelected.length) 
        {
            cocktailsApi.getByIngredient(this.state.ingredientsSelected[0].ingredientName)
                .then(res => {

                    const promises = res.map(drink => {
                        return cocktailsApi.getDrinkById(drink.idDrink)
                            .then(drinkDetailed => {
                                return drinkDetailed
                            })
                            .catch(function(err) {
                                console.error(err)
                            })
                    })

                    Promise.all(promises)
                        .then((promise)=> {
                            
                        	let arrayCocktails = this.compareIngredients(promise)
                        	if(!arrayCocktails){
	                        	arrayCocktails=[]
	                        	promise.map(elem=>{
	                        		arrayCocktails.push({
	                        			drinkId: elem[0].idDrink,
	                        			drinkName: elem[0].strDrink
	                        		})
	                        	})
	                        }
	                        this.setState({
	                                drinksState: arrayCocktails
	                        })

                        })
                })
                .catch(function(err) {
                    console.error(err)
                })
        }
    }

    compareIngredients = (promise)=>{

    	if(this.state.ingredientsSelected[1]){
	    	let arrayCocktails = []
			for(let i=0;i<promise.length;i++){
				for(let j=0;j<=15;j++){
					let ingredient = 'strIngredient' + j
					if (promise[i][0][ingredient]!=='') {
						if(promise[i][0][ingredient] == this.state.ingredientsSelected[1].ingredientName){
							arrayCocktails.push({
								drinkId:promise[i][0].idDrink,
								drinkName:promise[i][0].strDrink
	                        })
						}
					}	
				}	
			}
	        return arrayCocktails
	    }
	    return undefined
    }

	addIngredient = (e,ingredient) => {
			e.preventDefault()
			
			let ingSelect={}

			cocktailsApi.searchIngredient(ingredient)
			.then(res=>{
				let ingredient ={
					ingredientId:res[0].idIngredient,
					ingredientName:res[0].strIngredient
				}
				this.setState((prevState)=>{
					ingredientsSelected: prevState.ingredientsSelected.push(ingredient)
				})	

				this.forceUpdate()
			})
	}

	deleteIngredient = (id) =>{
		this.setState(function(prevState) {
            let ingredients = prevState.ingredientsSelected.filter(function(ing) {
                return ing.ingredientId !== id
            })

            return {
                ingredientsSelected:ingredients
            }
        })
	}

	takeNameCocktail = (e, name) => {
		e.preventDefault()
		console.log('el nombre es' + name)
		this.setState({
			cocktailName: name,
			lgShow: true
		})
	}


	render() {
		let lgClose = () => this.setState({ lgShow: false })
		return( 
			<div className="allDrinks">
				<h2>Choose your favourites ingredients</h2>
			<div className='container'>
				<div className='row'>
					<div className=' col-xs-12 col-md-7'>
						<div className='row'>
						<div className='col-xs-12 col-md-6 bbselected'>
						<Search 
							textSearch = {this.state.textSearch}
							changeTextSearch = {this.changeTextSearch}
							getAllIngredients = {this.getAllIngredients}
						/>
						
						<ul>
							{this.state.arrayIngredients.map((name,i)=><li className='list' onClick={event => this.addIngredient(event,name)} key={i}><a href="#">{name}</a></li>)}
						</ul>
						</div>
						<div className='col-xs-12 col-md-6'>
						<SelectedIngredients 
							ingredientsSelected = {this.state.ingredientsSelected}
							deleteIngredient = {this.deleteIngredient}
							searchByIngredient = {this.searchByIngredient}
						/>
						</div>
						</div>
					</div>	
				
				<div className='col-xs-12 col-md-4 col-md-offset-1'>
					<ul>
					{this.state.drinksState.length ? <div><h3>We find these combinations for you!</h3>{this.state.drinksState.map((elem) => <div><li className='listC' onClick={event => this.takeNameCocktail(event,elem.drinkName)} key={elem.drinkId}><a href="#">{elem.drinkName}</a></li></div>)}</div> : <CarouselImg />}
					</ul>
					
				</div>
				</div>
				<div className='row'>
					{ this.state.cocktailName.length ? <CocktailCard cocktailName = {this.state.cocktailName} show={this.state.lgShow} onHide={lgClose} /> : undefined}
				</div>
			</div>
			</div>
		)
	}
}

export default ChooseIngredients