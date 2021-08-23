const express = require('express');
const router= express.Router();
const userControler = require('../controllers/userController')

router.get('',userControler.getData);
router.post('',userControler.insertData);
router.put('/:id',userControler.updateData);
router.delete('/:id',userControler.deleteData);
router.get('/:id',userControler.searchData);

module.exports = router;