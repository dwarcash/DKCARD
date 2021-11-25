const express = require('express');
const { login, signUp, postCard } = require('../controllers/ProfileController.js')

const router = express.Router();
router.post('/login', login);
router.post('/signup', signUp)
router.post('/addBusiness', postCard);

module.exports = router;