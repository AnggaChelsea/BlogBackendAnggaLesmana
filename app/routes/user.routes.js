const userController = require('../controllers/UserController');
const router = require('express').Router();

router.post('/register', userController.register)
// router.post('/login', userController.login)

module.exports = router