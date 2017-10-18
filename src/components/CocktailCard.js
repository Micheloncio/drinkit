import React,{Component} from 'react'
import {Grid, Row, Thumbnail, Col, Image} from 'react-bootstrap'

import cocktailsApi from '../services/cocktailsApi'


class CocktailCard extends Component{
	constructor(props) {
		super(props);
		
		this.state={
			cocktailState: {}
		}
	}

	getCocktail = (name) =>{
		cocktailsApi.searchDrinksByName(name)
		.then(res =>{
			console.log(res)
			let ingredients = []
			for(let i=1; i<=15;i++){
				let ingredient = 'strIngredient' + i
				if(res[0][ingredient]){
					res[0]['cocktailId']
					ingredients.push(res[0][ingredient])	
				}
			}
			let measures = []
			for(let i=1; i<=15;i++){
				let measure = 'strMeasure' + i
				if(res[0][measure] && res[0][measure]!== ' '){
					res[0]['cocktailId']
					measures.push(res[0][measure])	
				}
			}

			let cocktail = {
				cocktailId: res[0].idDrink,
				cocktailType: res[0].strAlcoholic,
				cocktailCategory: res[0].strCategory,
				cocktailName: res[0].strDrink,
				cocktailImg: res[0].strDrinkThumb,
				cocktailGlass: res[0].strGlass,
				cocktailInstructions: res[0].strInstructions,
				cocktailIngredients: ingredients,
				cocktailMeasures: measures,
			}

			this.setState({
				cocktailState: cocktail
			})

		})

	}

	componentWillMount() {
		this.getCocktail(this.props.cocktailName)
	}

	render(){
		return(
				<Grid className="align-content">
				    <Row>
				    <Col xs={12} md={4} ms={4}>
				      <Thumbnail> 
				       	<Image src={this.state.cocktailState.cocktailImg} rounded responsive /> 
				        <h3>{this.state.cocktailState.cocktailName}</h3>
				         <ul>
                            
                        </ul>
				      </Thumbnail>
				    </Col>
				  	</Row>
				</Grid>

		)
	}
}
//{this.state.cocktailState.cocktailIngredients.map((ingredient,i)=><li key={i}>{ingredient}</li>)}
export default CocktailCard

