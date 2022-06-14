 const mongoose = require("./connection")
 const Card = require('./cards')


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ac0eb5e49amshb93c4156f9579bep1f0f93jsna1d1162d60af',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
	}
};

fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Classic', options)
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
