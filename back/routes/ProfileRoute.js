const express = require('express');
const { login, signUp, postCard, addProduct } = require('../controllers/ProfileController.js')

const router = express.Router();
router.post('/login', login);
router.post('/signup', signUp)
router.post('/addBusiness', postCard);
router.post('/addProduct', addProduct);

module.exports = router;