import React,{Component} from 'react'

class Search extends Component{

	render(){
		return (
			<form>
				<input className="searchBox" onChange={this.props.changeTextSearch} type="text" placeholder="Write a ingredient"></input>
				<button className="btn btn-success" onClick={event => {this.props.getAllIngredients(event, this.props.textSearch)}}>Search</button>
			</form>
		)
	}
}

export default Search