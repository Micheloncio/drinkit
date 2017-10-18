import React, {Component} from 'react'
import cocktailsApi from '../services/cocktailsApi'

class AllDrinks extends Component {
	constructor (){
		super();
		this.state={
			cocktailState: [],
		}

	}

	componentDidMount = () => { 
		cocktailsApi.getAlcDrinks()
		.then(res => {
				this.setState({
				cocktailState: res.map(obj => obj.strDrink)
			})
			console.log(this.state)			
		})
	}







	render() {
		return (
			<div>
				<button>my button</button>
				<ul>
				{this.state.cocktailState.map((name,i) => <li key={i}>{name}</li>)}
				</ul>
			</div>)
		
	}
}





export default AllDrinks