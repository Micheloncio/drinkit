import React,{Component} from 'react'
import './Search.css'
import{Glyphicon} from 'react-bootstrap'
class SelectedIngredients extends Component{
	render(){
		return (
			<div>
				<h5>INGREDIENTS SELECTED:</h5>
				<ul>
					{
						this.props.ingredientsSelected.map( elem => <li key={elem.ingredientId}>{elem.ingredientName} 
						<a onClick={() =>{this.props.deleteIngredient(elem.ingredientId)}} href="#"> <span className="glyphicon glyphicon-remove" /></a>
						</li> )
					}
				</ul>
				{this.props.ingredientsSelected.length ? <button className="btn searchButton2" onClick={this.props.searchByIngredient}><Glyphicon className='searchbutton' glyph="search" /></button> : undefined}
				</div>
		)
	}
}

export default SelectedIngredients 