'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/orderController');
// const authService = require('../services/authService');

router.get('/', controller.get);
router.post('/', /**authService.authorize,*/ controller.post);
router.delete('/:id',/**authService.isAdmin,*/ controller.delete);

module.exports = router;