import React,{Component} from 'react'
import './Search.css'
class Search extends Component{

	render(){
		return (
			<div>
			<form>
				<input className="searchBoxChoose" onChange={this.props.changeTextSearch} type="text" placeholder="Write an ingredient..."></input>
				<button className="btn searchButton" onClick={event => {this.props.getAllIngredients(event, this.props.textSearch)}}>Find</button>
				<h5>INGREDIENTS:</h5>
			</form>
			</div>
		)
	}
}

export default Search