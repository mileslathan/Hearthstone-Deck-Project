const { default: mongoose } = require("mongoose");

const { Schema } = mongoose

const userCardSchema = new Schema ({
    cardId: String,
    dbfId: Number,
    name: String,
    type: String,
    rarity: String,
    cost: Number,
    text: String,
    playerClass: String,
    spellSchool: String,
    img: { type: String, default: 'https://i.imgur.com/eIY6pNj.png' },
})

// Make cards Schema
const collectionSchema = new Schema ({
    username: String,
    cards: [ userCardSchema ],
    name: String,
    img: String,
    date: Date,
    comments: String
})

module.exports = collectionSchema