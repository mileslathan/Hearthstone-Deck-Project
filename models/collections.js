const { default: mongoose } = require("mongoose");

const { Schema } = mongoose

// Make cards Schema

const collectionSchema = new Schema ({
    username: String,
    name: String,
    img: String,
    date: Date,
    comments: String
})

module.exports = collectionSchema