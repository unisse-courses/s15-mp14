const router = require('express').Router();
const userController = require('../controller/userController');
const { loginValidation,registerValidation } = require('../validator.js');
const { isPublic, isPrivate } = require('../middlewares/checkSession');


// GET register to display registration page
router.get('/register', (req, res) => {
  res.render('register');
});
router.get('/login', (req, res) => {
  res.render('login');
});
// POST methods for form submissions
router.post('/register',isPublic,registerValidation, userController.registerUser);
router.post('/login', isPublic,loginValidation,userController.loginUser);

// logout
router.get('/logout', isPrivate, userController.logoutUser);

module.exports = router;
