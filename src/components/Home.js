import React, {Component} from 'react'
import cocktailsApi from '../services/cocktailsApi'
import {Carousel, Image} from 'react-bootstrap'
import './Home2.css'

class Home extends Component {
	constructor (){
		super();

		this.state={
			cocktailState: [],
		}
	}

	
	render() {
		return (
			<div className="container">
			  <div className="jumbotron">
			    <h1>Drink It</h1>      
			    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
			  </div>   
			</div>  

				

			)
		}	
}
export default Home