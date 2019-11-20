const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controllers');

router.get('/', user.getUsers);
router.post('/', user.createUser);
router.get('/:id', user.getUser);


module.exports = router;