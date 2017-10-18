import React,{Component} from 'react'

class SelectedIngredients extends Component{
	render(){
		return (
			<div>
				<h3><u>Selected Ingredients</u></h3>
				<ul>
					{
						this.props.ingredientsSelected.map( elem => <li key={elem.ingredientId}>{elem.ingredientName} 
						<a onClick={() =>{this.props.deleteIngredient(elem.ingredientId)}} href="#"><span className="glyphicon glyphicon-remove" /></a>
						</li> )
					}
				</ul>
				<button onClick={this.props.searchByIngredient}>Search</button>
				</div>
		)
	}
}

export default SelectedIngredients 