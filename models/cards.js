const { default: mongoose } = require("mongoose");

const { Schema, model } = mongoose

// Make cards Schema

const cardsSchema = new Schema ({
    cardId: String,
    dbfId: Number,
    name: String,
    type: String,
    rarity: String,
    cost: Number,
    text: String,
    playerClass: String,
    spellSchool: String,
    img: String
})

const Card = model('Card', cardsSchema)

module.exports = Card