const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const recipientRoutes = require('./recipient-routes.js');
const giftRoutes = require('./gift-routes');

router.use('/users', userRoutes);
router.use('/recipients', recipientRoutes);
router.use('/gifts', giftRoutes);

module.exports = router;