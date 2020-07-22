const express = require('express');
const router = express.Router();

const LibraryController = require('./controllers/LibraryController');
const LibraryValidation = require('./middlewares/LibraryValidation');

router.get('/construction', LibraryController.all);
router.get('/construction/library', LibraryController.filterCategory);

router.post('/construction', LibraryValidation, LibraryController.create);
router.put('/construction/:id', LibraryValidation, LibraryController.update);
router.get('/construction/:id', LibraryController.show);
router.delete('/construction/:id', LibraryController.delete);

module.exports = router;