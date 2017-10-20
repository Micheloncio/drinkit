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
			    <h1 className='home'>DRINK IT</h1>
			    <h3 className="homeh3">The definitive cocktails and drinks finder</h3>     
			    <p></p>
			  </div>    
			</div>
			)
		}	
}
export default Home