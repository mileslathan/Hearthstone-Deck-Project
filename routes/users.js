const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('I hope this is working three?...')
})

module.exports = router