import React,{Component} from 'react'

class Search extends Component{

	render(){
		return (
			<form>
				<h3>Select your ingedients</h3>
				<input className="searchBox" onChange={this.props.changeTextSearch} type="text" placeholder="Write a ingredient"></input>
				<button className="btn btn-success" onClick={event => {this.props.getAllIngredients(event, this.props.textSearch)}}>Search</button>
			</form>
		)
	}
}

export default Search