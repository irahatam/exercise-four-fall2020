const express = require('express');

const router = express.Router();

router.get('/', (req,res) => res.send ('Exercies Four'));

module.exports = router;