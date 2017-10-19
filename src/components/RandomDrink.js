import React, {Component} from 'react'
import cocktailsApi from '../services/cocktailsApi'
import CocktailCard from './CocktailCard'

class RandomDrink extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cocktailName: '',
			lgShow: false
		}
	}


	getRandomCocktail = () =>{
		cocktailsApi.getRandomCocktail()
		.then(res =>{
			this.setState({
				cocktailName: res.strDrink,
			})

		})

	}

	componentWillMount(){
		this.getRandomCocktail()
	}

	render() {
		let lgClose = () => this.setState({ lgShow: false })
		return (<div>
			{this.state.cocktailName.length ? <CocktailCard cocktailName = {this.state.cocktailName}/> : undefined}
		</div>)
	}
}

export default RandomDrink