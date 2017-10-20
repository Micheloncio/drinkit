import axios from 'axios'


const cocktailsApi = {
	baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/',

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
	getDrinkById: function(id) {
		return axios.get(this.baseUrl + `lookup.php?i=${id}`)
		.then (res=> res.data.drinks)
	},
	getAllIngredients: function() {
		return axios.get(this.baseUrl + 'list.php?i=list')
		.then (res=> res.data.drinks)
	},
}

export default cocktailsApi