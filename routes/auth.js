const router = require('express').Router();
const userController = require('../controllers/userController');
const { registerValidation } = require('../validators.js');


// GET register to display registration page
router.get('/register', (req, res) => {
  res.render('register', {
    pageTitle: 'Registration',
  });
});

// POST methods for form submissions
router.post('/register',registerValidation, userController.createUser);
router.post('/login', userController.loginUser);

// logout
router.get('/logout', userController.logoutUser);

module.exports = router;
