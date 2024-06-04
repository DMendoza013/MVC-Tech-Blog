const router = require('express').router();
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);

module.exports = router;