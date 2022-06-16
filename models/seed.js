 const mongoose = require("./connection")
 const Card = require('./cards')

 const MY_API_KEY = process.env.API_KEY
 const MY_API_HOST = process.env.API_HOST

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': MY_API_KEY,
		'X-RapidAPI-Host': MY_API_HOST
	}
};

fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/', options)
	.then((apiresponse) => {
		console.log(apiresponse)
		return apiresponse.json()
	})
	.then((jsonData) => {
		const cardData = jsonData
		Card.insertMany(cardData)
	})
	.catch(function(error){
		console.log(error)      // Failure
	});
	
	
	// .then(response => console.log(response))
