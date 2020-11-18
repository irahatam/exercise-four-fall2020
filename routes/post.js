// Show one blog post

const express = require('express');

const router = express.Router();

router.get('/', (req,res) => res.send ('A Blog Post'));

module.exports = router;