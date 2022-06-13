const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ac0eb5e49amshb93c4156f9579bep1f0f93jsna1d1162d60af',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
	}
};

fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Classic', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));