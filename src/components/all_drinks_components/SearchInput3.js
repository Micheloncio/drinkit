import React, {Component} from 'react'
import {Glyphicon,Col} from 'react-bootstrap'


class SearchInput3 extends Component {
	constructor(){
		super();
		this.state={
				value:''
			};
		}
handleChange = (e) => {
	console.log(e.target.value)
	this.setState({
		value: e.target.value
	})
}
handleSubmit = (e) => {
	e.preventDefault()
	const searchName3 = this.props.optionalArray.filter(name => this.state.value === name)
	console.log(searchName3)
	this.props.updateStateB(searchName3)
}


	render(){
		return(
		<form onSubmit={this.handleSubmit}>
		<div>
			<div className='row'>
			<input value={this.state.value} onChange={this.handleChange} className="form-control searchbox" placeholder="Find a drink"/>
			<button type="submit" className="btn btn-default"><Glyphicon className='searchbutton' glyph="search" /></button>
			</div>
		</div>
		</form>

 		)
	}


}

	


export  default SearchInput3;