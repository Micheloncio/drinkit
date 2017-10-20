import React, {Component} from 'react'
import cocktailsApi from '../services/cocktailsApi'
import {Carousel, Image} from 'react-bootstrap'
import './Home.css'
import CocktailCard from './CocktailCard'

class CarouselImg extends Component {
	constructor (){
		super();

		this.state={
			cocktailState: [],
			cocktailName: '',
			lgShow: false
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
				cocktailState: response.map(obj => {return{img: obj.strDrinkThumb,name:obj.strDrink}})
			})
			console.log(this.state) 
		})		
	}
	takeNameCocktail = (e, name) => {
		e.preventDefault()
		console.log('el nombre es' + name)
		this.setState({
			cocktailName: name,
			lgShow: true
		})
	}
	
	render() {
		let lgClose = () => this.setState({ lgShow: false })
		return (
			<div>
				<div className='container-fluid'>
				<h1 className='hidden'>Home</h1>
				<Carousel className='carousel'>
				{this.state.cocktailState.map((link, i)=> <Carousel.Item key={i}>
				    <Image className="carouselImage" onClick={event =>this.takeNameCocktail(event,link.name)}width={200} height={250} alt="900x500" src={link.img} circle />
				    </Carousel.Item>)}
				</Carousel>
				{ this.state.cocktailName.length ? <CocktailCard cocktailName = {this.state.cocktailName} show={this.state.lgShow} onHide={lgClose} /> : undefined}
			</div>
			</div>

			)
		}	
}

export default CarouselImg