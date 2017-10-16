import axios from 'axios'


const cocktailsApi = {
	baseUrl: 'http://www.thecocktaildb.com/api/json/v1/1/',

	getRandomCocktail: function(){
		return axios.get(this.baseUrl + 'random.php')
		.then(res=>{return res.data.drinks[0]})
	},
}

export default cocktailsApi