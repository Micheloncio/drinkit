import React,{Component} from 'react'
import './Search.css'
class Search extends Component{

	render(){
		return (
			<div>
			<form>
				<h4>INGREDIENTS</h4>
				<input className="searchBox" onChange={this.props.changeTextSearch} type="text" placeholder="Write an ingredient..."></input>
				<button className="btn searchButton" onClick={event => {this.props.getAllIngredients(event, this.props.textSearch)}}>Find</button>
			</form>
			</div>
		)
	}
}

export default Search