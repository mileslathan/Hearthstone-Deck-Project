const express = require('express');
const router = express.Router();
const User = require('../models/users')

router.get('/', (req, res) => {
    res.render('users/collection.liquid', { User })
})

module.exports = router