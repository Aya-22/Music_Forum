const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bandRoutes = require('./bandRoutes');
const postRoutes = require('./postRoutes')

router.use('/users', userRoutes);
router.use('/bands', bandRoutes);
router.use('/posts', postRoutes);

module.exports = router;
