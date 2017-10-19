import React, {Component} from 'react'
import {Grid, Row, Col, Thumbnail, Button, Collapse} from 'react-bootstrap'
import cocktailsApi from '../services/cocktailsApi'
import './Alldrinks.css'
import SearchInput from './SearchInput'
import SearchInput2 from './SearchInput2'
import SearchInput3 from './SearchInput3'
import CocktailCard from './CocktailCard'

class AllDrinks extends Component {
	constructor (){
		super();
		this.state={
			alcoholState: [],
			nonAlcocholState: [],
			optionalState: [],
			toggleState: false,
			toggleState2: false,
			toggleState3: false,
			cocktailName: '',
			lgShow: false
		}
	}

	listAlcDrinks = (e) => { 
		cocktailsApi.getAlcDrinks()
		.then(res => {
				this.setState({
				alcoholState: res.map(obj => obj.strDrink)
			})
			console.log(this.state)			
		})
		if(this.state.toggleState === false){
			this.setState({
				toggleState: true
			})

		}else{
			this.setState({
				toggleState: false
			})
		}
		

	}
	listNonAlcDrinks = (e) => {
    cocktailsApi.getNonAlcDrinks()
        .then(res => {
                this.setState({
                nonAlcocholState: res.map(obj => obj.strDrink)
            })
            console.log(this.state)            
        })
        		if(this.state.toggleState2 === false){
			this.setState({
				toggleState2: true
			})

		}else{
			this.setState({
				toggleState2: false
			})
    }
}

    listOptionalDrinks = (e) => {
    cocktailsApi.getOptionalDrinks()
        .then(res => {
                this.setState({
                optionalState: res.map(obj => obj.strDrink)
            })
            console.log(this.state)            
        })
        		if(this.state.toggleState3 === false){
			this.setState({
				toggleState3: true
			})

		}else{
			this.setState({
				toggleState3: false
			})
    }
}

	updateState = (newState) => {
		this.setState({alcoholState : newState})
	}

	updateState2 = (newState2) => {
		this.setState({nonAlcocholState : newState2})
	}
	updateState3 = (newState3) => {
		this.setState({optionalState : newState3})
	}
	takeNameCocktail=(e,name)=>{
		e.preventDefault()

		this.setState({
			cocktailName:name
		})
	}
	render() {
		let lgClose = () => this.setState({ lgShow: false })
		return (
			 <Grid>
			    <Row>
			    <Col className='container thumb' xs={6} md={4}>
			      <Thumbnail>
			      	<Button onClick={this.listAlcDrinks} bsStyle="primary" width={442} height={400}>ALCHOL</Button>&nbsp;
			        <Collapse in={this.state.toggleState}>
			         <div>
			         	<SearchInput AlcArray = {this.state.alcoholState} updateState={this.updateState}/>
						{this.state.alcoholState.map((name,i) => <div><ul key={i}><a onClick={event=> this.takeNameCocktail(event,name)} onClick={()=>this.setState({ lgShow: true })} href="#">{name}</a></ul></div>)}
			         </div>
			        </Collapse>
			     	</Thumbnail>
			    	</Col>
			    	<Col xs={6} md={4}>
			      <Thumbnail>
			        <Button onClick={this.listNonAlcDrinks} bsStyle="primary">NO-ALCHOL</Button>&nbsp;
					<Collapse in={this.state.toggleState2}>
			        <div>
			         	<SearchInput2 NoAlcArray = {this.state.nonAlcocholState} updateStateA={this.updateState2}/>
						{this.state.nonAlcocholState.map((name,i) => <div><ul key={i}><a onClick={event=> this.takeNameCocktail(event,name)} onClick={()=>this.setState({ lgShow: true })} href="#">{name}</a></ul></div>)}
			        </div>
					</Collapse>
			      </Thumbnail>
			    </Col>
			    <Col xs={6} md={4}>
			      <Thumbnail>
			        <Button onClick={this.listOptionalDrinks} bsStyle="primary">OPTIONAL</Button>&nbsp;
			        <Collapse in={this.state.toggleState3}>
			        <div>
			         	<SearchInput3 optionalArray = {this.state.optionalState} updateStateB={this.updateState3}/>
						{this.state.optionalState.map((name,i) => <div><ul key={i}><a onClick={event=> this.takeNameCocktail(event,name)} onClick={()=>this.setState({ lgShow: true })} href="#">{name}</a></ul></div>)}
			        </div>
					</Collapse>
			      </Thumbnail>
			    </Col>
			    </Row>
				<CocktailCard cocktailName = {this.state.cocktailName} show={this.state.lgShow} onHide={lgClose} />
			  </Grid>
			)
		
	}
}
export default AllDrinks