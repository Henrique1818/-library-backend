const express = require('express');
const router = express.Router();

const UseLibrary = require('./controllers/UseLibrary');

router.post('/', UseLibrary.create);
router.put('/:id', UseLibrary.update);
router.get('/:id', UseLibrary.show);
router.delete('/:id', UseLibrary.delete);

router.get('/', UseLibrary.all);


module.exports = router;