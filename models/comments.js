const { default: mongoose } = require("mongoose");

const { Schema } = mongoose

// Make cards Schema

const commentsSchema = new Schema ({
    userId: String,
    userName: String,
    date: Date,
    comments: String
})

module.exports = commentsSchema