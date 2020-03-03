var express = require('express');
var router = express.Router();

/**
 *  Sub ressources
 */
router.use('/auth', require('./auth'));
router.use('/users', require('./users'));
router.use('/user', require('./user'));
router.use('/remarks_contexts', require('./remarks_contexts'));



module.exports = router;
