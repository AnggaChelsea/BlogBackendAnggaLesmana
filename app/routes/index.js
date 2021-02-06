const router = require('express').Router();
const blogRouter = require('./blogpost.routes');
const userRouter = require('./user.routes');

router.use('/blog', blogRouter)
router.use('/user', userRouter)

module.exports = router