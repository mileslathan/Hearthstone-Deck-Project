const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Is this route working? I think yes.')
})

module.exports = router