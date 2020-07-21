const express = require('express');
const router = express.Router();

const LibraryController = require('./controllers/LibraryController');
const LibraryValidation = require('./middlewares/LibraryValidation');

router.post('/', LibraryValidation, LibraryController.create);
router.put('/:id', LibraryValidation, LibraryController.update);
router.get('/:id', LibraryController.show);
router.delete('/:id', LibraryController.delete);

router.get('/', LibraryController.filterCategory);
router.get('/filter/all', LibraryController.all);

module.exports = router;