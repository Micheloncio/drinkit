import React,{Component} from 'react'
import {Grid, Row, Thumbnail, Col, Image} from 'react-bootstrap'


class CocktailCard extends Component{


	render(){
		return(
				<Grid className="align-content">
				    <Row>
				    <Col xs={12} md={4} ms={4}>
				      <Thumbnail> 
				       	<Image src={this.props.cocktail.cocktailImg} rounded responsive /> 
				        <h3>{this.props.cocktail.cocktailName}</h3>
				        <ul>
							{this.props.cocktail.cocktailIngredients.map(function(ingredient){
									return <li>{ingredient}</li>
								})
							}
						</ul>
				      </Thumbnail>
				    </Col>
				  	</Row>
				</Grid>

			// 	<img src={}></img>
			// 	<h3></h3>
			// 	<ul>
			// 	{this.props.cocktail.cocktailIngredients.map(function(ingredient){
			// 			return <li>{ingredient}</li>
			// 		})
			// 	}
			// 	</ul>
			// </div>
		)
	}
}

export default CocktailCard

