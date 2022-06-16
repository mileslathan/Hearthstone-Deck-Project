const express = require('express')
const mongoose = require('../models/connection')
const router = express.Router()
const Card = require('../models/cards')
const User = require('../models/users')

router.get('/', (req, res) => {
    console.log('this is the req query', req.query)
    const username = req.session.username
    const userId = req.session.userId
    const loggedIn = req.session.loggedIn
    console.log(loggedIn)
    // console.log(userId)
    Card.find({})
    .then((showCards) => {
        res.render('cards/index', { showCards, username, loggedIn })
    })
    .catch((error) => {
        console.log(error)
    })
})

router.get('/search/:text/:search', (req, res) => {
    let text = req.params.text
    const username = req.session.username
    if (req.params.search === 'playerClass') {
        Card.find({playerClass: text})
        .then((showCards) => {
            console.log(showCards)
            res.render('cards/index', { showCards, username })
        })
        .catch((error) => {
            console.log(error)
        })
    } else if (req.params.search === 'name') {
        Card.find({name: text})
        .then((showCards) => {
            console.log(showCards)
            res.render('cards/index', { showCards, username })
        })
        .catch((error) => {
            console.log(error)
        })
    } else if (req.params.search === 'cost') {
        Card.find({cost: text})
        .then((showCards) => {
            console.log(showCards)
            res.render('cards/index', { showCards, username })
        })
        .catch((error) => {
            console.log(error)
        })
    }
})

router.post('/query', (req, res) => {
    console.log(req.body)
    res.redirect(`search/${req.body.text}/${req.body.search}`)
})

// edit PUT route. Takes the information from req.body and updates info.
router.put('/:id/edit', (req, res) => {
    const id = req.params.id
    let info = req.body
    Card.findbyIdAndUpdate(id, { name: info.name, img: info.img })
    .then((card) => {
        card.save()
        res.redirect('cards/show.liquid')
    })
})

// edit route
router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    console.log(id)
    Card.findById(id)
    .then((card) => {
        res.render('cards/edit.liquid', { card })
    })
    .catch((error) => {
        console.log(error)
    })
})
// show route
router.get('/:id', async (req, res) => {
    const loggedIn = req.session.loggedIn
    console.log(loggedIn)
     const id = req.params.id
    if (loggedIn) {
        const username = req.session.username
        const userCollections = await User.findOne({username: username}).populate("cardCollection")
        const usersCollectionsSpecified = userCollections.cardCollection
    //     const cardRender = Card.findById(id)
    // res.render('cards/show.liquid', { cardRender, usersCollectionsSpecified })
     //  const userCollectionName = usersCollectionsSpecified
     Card.findById(id)
     .then((showCard) => {
         res.render('cards/show.liquid', { showCard, usersCollectionsSpecified })
     })
    } else if (loggedIn === undefined) {
    //Finding the particular id of a card from db.
    Card.findById(id)
    .then((showCard) => {
        res.render('cards/show.liquid', { showCard })
    })
     .catch((error) => {
         console.log(error);
         res.json({ error });
     })
    }
})

router.delete('/:id/delete', (req, res) => {
    const id = req.params.id
    Card.findByIdAndDelete(id)
    res.redirect('/index.liquid')
})

module.exports = router