const express = require('express');
const router = express.Router();

const UseLibrary = require('./controllers/UseLibrary');

router.post('/', UseLibrary.create);
router.put('/', UseLibrary.alter)


module.exports = router;