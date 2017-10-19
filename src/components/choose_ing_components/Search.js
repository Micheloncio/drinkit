import React,{Component} from 'react'
import './Search.css'
class Search extends Component{

	render(){
		return (
			<form>
				<h5>Select your ingredients:</h5>
				<input className="searchBox" onChange={this.props.changeTextSearch} type="text" placeholder="Write an ingredient..."></input>
				<button className="btn searchButton" onClick={event => {this.props.getAllIngredients(event, this.props.textSearch)}}>find</button>
			</form>
		)
	}
}

export default Search