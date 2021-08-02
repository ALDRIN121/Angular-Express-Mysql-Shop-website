const express = require('express');
const router= express.Router();
const productsController = require('../controllers/productsController')

router.get('',productsController.viewProducts);
router.post('',productsController.addProducts);

module.exports = router;