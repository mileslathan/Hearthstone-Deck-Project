const { default: mongoose } = require("mongoose");

const { Schema, model } = mongoose


// Make cards Schema
const collectionSchema = new Schema ({
    username: String,
    cards: [ {
        type: Schema.Types.ObjectId,
        ref: 'Card'
    } ],
    name: String,
    img: String,
    date: Date,
    comments: String
})

const CardCollection = model("CardCollection", collectionSchema)

module.exports = CardCollection