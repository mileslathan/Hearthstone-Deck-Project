//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require('./connection')
const CardCollection = require('./collections')
////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// Pull schema and model from mongoose

const { Schema, model } = mongoose

// Make User Schema
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    cardCollection: [  {
        type: Schema.Types.ObjectId,
        ref: 'CardCollection'
    } ]
})

// Make User Model
const User = model ("User", userSchema)

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = User;