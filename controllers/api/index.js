const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const recipientRoutes = require('./recipient-routes.js');

router.use('/users', userRoutes);
router.use('/recipients', recipientRoutes);

module.exports = router;