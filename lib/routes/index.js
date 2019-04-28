const express = require('express');

const { bikes } = require('../controllers');

const router = express.Router();

router.post('/report', bikes.postBikeCase);
router.get('/getAll', bikes.getBikeCases);

module.exports = router;
