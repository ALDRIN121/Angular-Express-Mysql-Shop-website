const express = require('express');
const router= express.Router();
const userControler = require('../controllers/userController')

router.get('',userControler.getData);
router.post('',userControler.insertData);
router.put('/:id',userControler.updateData);

module.exports = router;