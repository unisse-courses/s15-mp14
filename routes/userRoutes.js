const router = require('express').Router();

const userController = require('../controller/userController');



router.post('/searchUser', userController.getUser);

router.post('/addUser', userController.createUser);