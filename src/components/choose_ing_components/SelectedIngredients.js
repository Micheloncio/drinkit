import React,{Component} from 'react'
import './SelectedIngredients.css'
import{Glyphicon} from 'react-bootstrap'
class SelectedIngredients extends Component{
	render(){
		return (
			<div className="divSectedIngredients">
				<h5>YOUR SELECTION:</h5>
				<ul className="ulSectedIngredients">				
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