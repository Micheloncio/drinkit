import React,{Component} from 'react'
import {Grid, Row, Thumbnail, Col, Image, Modal, Button } from 'react-bootstrap'
import './CocktailCard.css'
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
				<Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
					


	        				<Modal.Header closeButton className="closeBtn">
	        					<h2>{this.state.cocktailState.cocktailName}</h2>	          					
	        				</Modal.Header>
	        		<Row>
	        			<Modal.Body>  
		        			<Row>
			        			<Col xs={12} md={6}>
			        				<Image className="imageCocktail"src={this.state.cocktailState.cocktailImg} rounded responsive />
			        			</Col>
				          		<Col xs={12} md={6}>	
							        <ul>
							         	<h3>Ingredients:</h3>
			                            {this.state.cocktailState.cocktailIngredients ? this.state.cocktailState.cocktailIngredients.map((ingredient) => <li>{ingredient}</li>) : undefined}
			                        </ul>
			                    </Col>	
			                </Row>						
							<Row>
								<div className="instructions">
			                    	<h3>Instructions:</h3>
									<p>{this.state.cocktailState.cocktailInstructions}</p>
								</div>
							</Row>
						</Modal.Body>
					</Row>
			        <Modal.Footer>
			          <Button onClick={this.props.onHide}>Close</Button>
			        </Modal.Footer>
			      </Modal>

		)
	}
}

export default CocktailCard

