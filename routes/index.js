const express = require('express')
const mongoose = require('../models/connection')
const router = express.Router()
const Card = require('../models/cards')

router.get('/', (req, res) => {
    console.log('this is the req query', req.query)
    Card.find({})
    .then((showCards) => {
        res.render('index', { showCards })
    })
    .catch((error) => {
        console.log(error)
    })
})

router.get('/search/:text/:search', (req, res) => {
    let text = req.params.text
    let searchType
    if (req.params.search === 'playerClass') {
        Card.find({playerClass: text})
        .then((showCards) => {
            console.log(showCards)
            res.render('index', { showCards })
        })
        .catch((error) => {
            console.log(error)
        })
    } else if (req.params.search === 'name') {
        Card.find({name: text})
        .then((showCards) => {
            console.log(showCards)
            res.render('index', { showCards })
        })
        .catch((error) => {
            console.log(error)
        })
    } else if (req.params.search === 'cost') {
        Card.find({cost: text})
        .then((showCards) => {
            console.log(showCards)
            res.render('index', { showCards })
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



// router.post('/', (req, res) => {

// })

module.exports = router