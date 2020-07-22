const express = require('express');
const router = express.Router();

const LibraryController = require('./controllers/LibraryController');
const LibraryValidation = require('./middlewares/LibraryValidation');

router.get('/library', LibraryController.all);
router.get('/library/book', LibraryController.filterCategory);

router.post('/library', LibraryValidation, LibraryController.create);
router.put('/library/:id', LibraryValidation, LibraryController.update);
router.get('/library/:id', LibraryController.show);
router.delete('/library/:id', LibraryController.delete);

module.exports = router;