import React, {Component} from 'react'


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
			<input value={this.state.value} onChange={this.handleChange} className="form-control"/>
			<button type="submit" className="btn btn-default">Find</button>
		</form>

 		)
	}


}

	


export  default SearchInput3;