
const router = require('express').Router();
const blogs = require('../controllers/blogspot.controller');

router.post('/post', blogs.create)
router.get('/get', blogs.findAll)
router.get('/get/:id', blogs.findId)

module.exports = router