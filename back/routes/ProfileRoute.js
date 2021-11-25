const express = require('express');
const { login, signUp, addBusiness, editBusiness, addProduct, addGallery, addLogo } = require('../controllers/ProfileController.js')

const router = express.Router();
router.post('/login', login);
router.post('/signup', signUp)
router.post('/addBusiness', addBusiness);
router.post('/editBusiness', editBusiness);
router.post('/addProduct', addProduct);
router.post('/addGallery', addGallery);
router.post('/addLogo', addLogo);

module.exports = router;