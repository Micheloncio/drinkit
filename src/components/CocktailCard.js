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

			let cocktail = {
				cocktailId: res[0].idDrink,
				cocktailType: res[0].strAlcoholic,
				cocktailCategory: res[0].strCategory,
				cocktailName: res[0].strDrink,
				cocktailImg: res[0].strDrinkThumb,
				cocktailGlass: res[0].strGlass,
				cocktailInstructions: res[0].strInstructions,
				cocktailIngredients: ingredients,
			}

			this.setState({
				cocktailState: cocktail
			})

		})

	}

	componentWillMount() {
		this.getCocktail(this.props.cocktailName)
	}

	componentWillReceiveProps(nextProps) {
		this.getCocktail(this.props.cocktailName)
	}

	render(){
		return(
				<Grid className="align-content">
				    <Row>
				    <Col xs={12} md={4} ms={4}>
				      <Thumbnail> 
				       	<Image src={this.state.cocktailState.cocktailImg} rounded responsive /> 
				        <h2>{this.state.cocktailState.cocktailName}</h2>
				        <Row>
				       		<Col xs={12} md={6}>
						        <ul>
						         	<h4>Ingredients:</h4>
		                            {this.state.cocktailState.cocktailIngredients ? this.state.cocktailState.cocktailIngredients.map((ingredient) => <li>{ingredient}</li>) : undefined}
		                        </ul>
		                    </Col>
							<Col xs={12} md={6}>
		                        <h3>Instructions:</h3>
								<p>{this.state.cocktailState.cocktailInstructions}</p>
							</Col>
						</Row>
				      </Thumbnail>
				    </Col>
				  	</Row>
				</Grid>

		)
	}
}

export default CocktailCard

