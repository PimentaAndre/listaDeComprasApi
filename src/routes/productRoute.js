'use strict'

const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/productController');
// const authService = require('../services/authService');



router.get('/', controller.get);
router.get('/:id', controller.getById);
// router.get('/tags/:tag', controller.getByTag);
router.post('/', /**authService.isAdmin,*/ controller.post);
router.put('/:id', /**authService.isAdmin,*/ controller.put);
router.delete('/:id', /**authService.isAdmin,*/ controller.delete);

module.exports = router;