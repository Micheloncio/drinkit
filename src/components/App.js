import React, { Component } from 'react';

import './App.css';

import cocktailsApi from '../services/cocktailsApi'
import CocktailCard from './CocktailCard'

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			cocktailState: {}
		}
	}


	getRandomCocktail = () =>{
		cocktailsApi.getRandomCocktail()
		.then(res =>{

			let ingredients = []
			for(let i=1; i<=15;i++){
				let ingredient = 'strIngredient' + i
				if(res[ingredient]){
					res['cocktailId']
					ingredients.push(res[ingredient])	
				}
			}
			let measures = []
			for(let i=1; i<=15;i++){
				let measure = 'strMeasure' + i
				if(res[measure] && res[measure]!== ' '){
					res['cocktailId']
					measures.push(res[measure])	
				}
			}

			let cocktailRandom = {
				cocktailId: res.idDrink,
				cocktailType: res.strAlcoholic,
				cocktailCategory: res.strCategory,
				cocktailName: res.strDrink,
				cocktailImg: res.strDrinkThumb,
				cocktailGlass: res.strGlass,
				cocktailInstructions: res.strInstructions,
				cocktailIngredients: ingredients,
				cocktailMeasures: measures,
			}

			this.setState({
				cocktailState: cocktailRandom
			})

		})

	}

	componentDidMount(){
		this.getRandomCocktail()
	}

    render() {
        return ( 
        	<div className = "App" >
        		{this.state.cocktailState.cocktailId && <CocktailCard
        			cocktail = {this.state.cocktailState}
        		/>}
            </div>
        );
    }
}

export default App;

/* 
idDrink:"11600"
strAlcoholic:"Alcoholic"
strCategory:"Ordinary Drink"
strDrink:"Kamikaze"
strDrinkThumb:"http://www.thecocktaildb.com/images/media/drink/xa58bb1504373204.jpg"
strGlass:"Cocktail glass"
strIBA:"New Era Drinks"
strIngredient1:"Vodka"
strIngredient2:"Triple sec"
strIngredient3:"Lime juice"
strInstructions:"Shake all ingredients together with ice. Strain into glass, garnish and serve."
strMeasure1:"1 oz "
strMeasure2:"1 oz "
strMeasure3:"1 oz "

*/