const express = require('express');
const {
    signUp,
    signIn,
    google,
    signOutUser
} = require('../controllers/auth.controllers.js');

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/google', google);
router.get('/signout', signOutUser);

module.exports = router;
