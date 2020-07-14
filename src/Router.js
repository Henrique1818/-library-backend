const express = require('express');
const router = express.Router();

const UseLibrary = require('./controllers/UseLibrary');

router.post('/create', UseLibrary.create)


module.exports = router;