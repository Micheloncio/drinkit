import React, {Component} from 'react'
import cocktailsApi from '../services/cocktailsApi'

import './ChooseIngredients.css'

import { cloneArray } from '../utils'
import Search from './choose_ing_components/Search'
import SelectedIngredients from './choose_ing_components/SelectedIngredients'
import CocktailCard from './CocktailCard'
import {Modal, Button} from 'react-bootstrap'


class ChooseIngredients extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			arrayIngredients: [],
			textSearch:'',
			ingredientsSelected: [],
			drinksState:[],
			cocktailState: {},
			cocktailName: ''
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
				for(let j=1;j<=15;j++){
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
		})
	}


	render() {
		return( 
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<Search 
							textSearch = {this.state.textSearch}
							changeTextSearch = {this.changeTextSearch}
							getAllIngredients = {this.getAllIngredients}
						/>
						<ul>
							{this.state.arrayIngredients.map((name,i)=><li onClick={event => this.addIngredient(event,name)} key={i}><a href="#">{name}</a></li>)}
						</ul>
					</div>
					<div className='col-md-6'>
						<SelectedIngredients 
							ingredientsSelected = {this.state.ingredientsSelected}
							deleteIngredient = {this.deleteIngredient}
							searchByIngredient = {this.searchByIngredient}
						/>
					</div>	
				</div>
				<div className='row'>
					<ul>
					{this.state.drinksState.map((elem) => <li onClick={event => this.takeNameCocktail(event,elem.drinkName)}key={elem.drinkId}><a href="#">{elem.drinkName}</a></li>)}
					</ul>
				</div>
				<div className='row'>
					{this.state.cocktailName.length ? <CocktailCard cocktailName = {this.state.cocktailName}/> : undefined}
					<Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        				<Modal.Header closeButton>
          					<Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
        				</Modal.Header>
        			<Modal.Body>
			          <h4>Wrapped Text</h4>
			          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
			          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
			          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
			        </Modal.Body>
			        <Modal.Footer>
			          <Button onClick={this.props.onHide}>Close</Button>
			        </Modal.Footer>
			      </Modal>

					
				</div>
			</div>
		)
	}
}

//{this.state.cocktailName.length ? <CocktailCard cocktailName = {this.state.cocktailName}/> : undefined}

export default ChooseIngredients