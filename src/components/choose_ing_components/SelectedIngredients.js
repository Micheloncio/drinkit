import React,{Component} from 'react'

class SelectedIngredients extends Component{
	render(){
		return (
			<div>
				<h5>Selected Ingredients</h5>
				<ul>
					{
						this.props.ingredientsSelected.map( elem => <li key={elem.ingredientId}>{elem.ingredientName} 
						<a onClick={() =>{this.props.deleteIngredient(elem.ingredientId)}} href="#"><span className="glyphicon glyphicon-remove" /></a>
						</li> )
					}
				</ul>
				{this.props.ingredientsSelected.length ? <button className="btn btn-success" onClick={this.props.searchByIngredient}>Search</button> : undefined}
				</div>
		)
	}
}

export default SelectedIngredients 