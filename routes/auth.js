const router = require('express').Router();
const userController = require('../controller/userController');
const { registerValidation } = require('../validator.js');


// GET register to display registration page
router.get('/register', (req, res) => {
  res.render('register');
});
router.get('/login', (req, res) => {
  res.render('login');
});
// POST methods for form submissions
router.post('/register',registerValidation, userController.registerUser);
// router.post('/login', userController.loginUser);

// // logout
// router.get('/logout', userController.logoutUser);

module.exports = router;
