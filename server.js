/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
const express = require('express')
const methodOverride = require('method-override')



/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = require("liquid-express-views")(express(), {root: [path.resolve(__dirname, 'views/')]})


/////////////////////////////////////////////
// Routes
/////////////////////////////////////////////
const userRouter = require('.routes/users')
const cardRouter = require('./routes/cards')
const indexRouter = require('./routes/index')


/////////////////////////////////////////////
// Routers
/////////////////////////////////////////////

app.use('/users', userRouter)
app.use('/cards', cardRouter)
app.use('/index', indexRouter)







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




const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}`)
})