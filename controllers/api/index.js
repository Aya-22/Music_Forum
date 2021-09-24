const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bandRoutes = require('./bandRoutes');

router.use('/users', userRoutes);
router.use('/bands', projectRoutes);

module.exports = router;
