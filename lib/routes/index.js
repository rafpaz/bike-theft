const express = require('express');

//Require all controllers
const { bikes } = require('../controllers');

const router = express.Router();

router.post('/report', bikes.postBikeCase);
