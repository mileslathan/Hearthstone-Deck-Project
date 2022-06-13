/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
const express = require('express')
const methodOverride = require('method-override')
require('dotenv').config()



/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = require("liquid-express-views")(express())


/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
// app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically
// app.use(
//   session({
//     secret: process.env.SECRET,
//     store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
//     saveUninitialized: true,
//     resave: false,
//   })
// );

/////////////////////////////////////////////
// Routes
/////////////////////////////////////////////
const userRouter = require('./routes/users')
const cardRouter = require('./routes/cards')
const indexRouter = require('./routes/index')


/////////////////////////////////////////////
// Routers
/////////////////////////////////////////////

app.use('/users', userRouter)
app.use('/cards', cardRouter)
app.use('/index', indexRouter)








const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}`)
})