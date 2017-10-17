import axios from 'axios'


const cocktailsApi = {
	baseUrl: 'http://www.thecocktaildb.com/api/json/v1/1/',

	getRandomCocktail: function(){
		return axios.get(this.baseUrl + 'random.php')
		.then(res=> res.data.drinks[0])
	},
	getAlcDrinks: function() {
		return axios.get(this.baseUrl + 'filter.php?a=Alcoholic')
		.then (res=> res.data.drinks)
	},
	getNonAlcDrinks: function() {
		return axios.get(this.baseUrl + 'filter.php?a=Non_Alcoholic')
		.then (res=> res.data.drinks)
	},
	getOptionalDrinks: function() {
		return axios.get(this.baseUrl + 'filter.php?a=optional_Alcohol')
		.then (res=> res.data.drinks)
	},
	searchDrinksByName: function(name) {
		return axios.get(this.baseUrl + `search.php?s=${name}`)
		.then (res=> res.data.drinks)
	},
	searchIngredient: function(ingredient) {//search a ingredient
		return axios.get(this.baseUrl + `search.php?i=${ingredient}`)
		.then (res=> res.data.ingredients)
	},
	getByIngredient: function(ingredient) {//filter cocktails by ingredient
		return axios.get(this.baseUrl + `filter.php?i=${ingredient}`)
		.then (res=> res.data.drinks)
	},
}

export default cocktailsApi

http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita