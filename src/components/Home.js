import React, {Component} from 'react'
import cocktailsApi from '../services/cocktailsApi'
import {Carousel, Image} from 'react-bootstrap'
import './Home.css'

class Home extends Component {
	constructor (){
		super();

		this.state={
			cocktailState: [],
		}
	}

	componentDidMount = () => {
		const getImage = () => {
			const  img1 = cocktailsApi.getRandomCocktail();
			const  img2 = cocktailsApi.getRandomCocktail();
			const  img3 = cocktailsApi.getRandomCocktail()

			return Promise.all([img1, img2, img3])
		}
		
		getImage().then(response => {
			this.setState({
				cocktailState: response.map(obj => obj.strDrinkThumb)
			})
			console.log(this.state) 
		})		
	}
	
	render() {
		return (
			<div>
				
			</div>

			)
		}	
}
export default Home