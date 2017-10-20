import React, {Component} from 'react'
import {Glyphicon, Col} from 'react-bootstrap'
import './SearchInput.css'


class SearchInput extends Component {
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
	const searchName = this.props.AlcArray.filter(name => this.state.value === name)
	console.log(searchName)
	this.props.updateState(searchName)
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

	


export  default SearchInput;