var express = require('express');
var router = express.Router();
var skillController = require('../controllers/skills')


router.get('/', skillController.index);
router.get('/new', skillController.new);
router.get('/:skill', skillController.show);
router.delete('/:id', skillController.delete);
module.exports = router;
