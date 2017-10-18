import React, {Component} from 'react'
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'
import cocktailsApi from '../services/cocktailsApi'

class AllDrinks extends Component {
	constructor (){
		super();
		this.state={
			cocktailState: [],
		}
	}

	listAlcDrinks = () => { 
		cocktailsApi.getAlcDrinks()
		.then(res => {
				this.setState({
				cocktailState: res.map(obj => obj.strDrink)
			})
			console.log(this.state)			
		})
	}
	listNonAlcDrinks = () => {
    cocktailsApi.getNonAlcDrinks()
        .then(res => {
                this.setState({
                cocktailState: res.map(obj => obj.strDrink)
            })
            console.log(this.state)            
        })
    }

    listOptionalDrinks = () => {
    cocktailsApi.getOptionalDrinks()
        .then(res => {
                this.setState({
                cocktailState: res.map(obj => obj.strDrink)
            })
            console.log(this.state)            
        })
    }

	render() {
		return (
			 <Grid>
			    <Row>
			    <Col xs={6} md={4}>
			      <Thumbnail>
			      	<Button onClick={this.listAlcDrinks} bsStyle="primary" width={242} height={200}>Button</Button>&nbsp;
			        <h3>Thumbnail label</h3>
			        <ul>
						{this.state.cocktailState.map((name,i) => <li key={i}>{name}</li>)}
					</ul>
			      </Thumbnail>
			    </Col>
			    <Col xs={6} md={4}>
			      <Thumbnail>
			        <Button onClick={this.listNonAlcDrinks} bsStyle="primary">Button</Button>&nbsp;
			        <h3>Thumbnail label</h3>
			        <ul>
						{this.state.cocktailState.map((name,i) => <li key={i}>{name}</li>)}
					</ul>
			      </Thumbnail>
			    </Col>
			    <Col xs={6} md={4}>
			      <Thumbnail>
			        <Button onClick={this.listOptionalDrinks} bsStyle="primary">Button</Button>&nbsp;
			        <h3>Thumbnail label</h3>
			        <ul>
						{this.state.cocktailState.map((name,i) => <li key={i}>{name}</li>)}
					</ul>
			      </Thumbnail>
			    </Col>
			    </Row>
			  </Grid>
			)
		
	}
}
export default AllDrinks