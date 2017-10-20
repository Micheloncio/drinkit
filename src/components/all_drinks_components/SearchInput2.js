import React, {Component} from 'react'
import {Glyphicon,Col} from 'react-bootstrap'


class SearchInput2 extends Component {
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
	const searchName2 = this.props.NoAlcArray.filter(name => this.state.value === name)
	console.log(searchName2)
	this.props.updateStateA(searchName2)
}


	render(){
		return(
		<form onSubmit={this.handleSubmit}>
		<div>
			<div className='row'>
			<input value={this.state.value} onChange={this.handleChange} className="form-control searchbox" placeholder="Find a drink"/>
			<button className='loup' type="submit" className="btn btn-default" ><Glyphicon className='searchbutton' glyph="search" /></button>
			</div>
		</div>
		</form>

 		)
	}


}

	


export  default SearchInput2;