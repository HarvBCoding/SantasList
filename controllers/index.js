const router = require('express').Router();
// Lori add - 
const homeRoutes = require('./home-routes.js');

const apiRoutes = require('./api');

router.use('/api' ,apiRoutes);

// lori add 
router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;