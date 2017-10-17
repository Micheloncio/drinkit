import React, {Component} from 'react'
import cocktailsApi from '../services/cocktailsApi'
import CocktailCard from './CocktailCard'

class RandomDrink extends Component {
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
		return (<div>
			{this.state.cocktailState.cocktailId && <CocktailCard
        			cocktail = {this.state.cocktailState}
        		/>}
		</div>)
	}
}

export default RandomDrink