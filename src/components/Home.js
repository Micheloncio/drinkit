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
		const getImage = async () => {
			const  img1 = await cocktailsApi.getRandomCocktail();
			const  img2 = await cocktailsApi.getRandomCocktail();
			const  img3 = await cocktailsApi.getRandomCocktail()

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
			<div className='container-fluid'>
				<h1 className='hidden'>Home</h1>
				<Carousel className='carousel'>
				{this.state.cocktailState.map((link, i)=> <Carousel.Item key={i}>
				      <Image width={450} height={250} alt="900x500" src={link} circle/>
				    </Carousel.Item>)}
				</Carousel>
			</div>
			)
	}
}
export default Home