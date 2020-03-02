var express = require('express');
var router = express.Router();

/**
 *  Sub ressources
 */
router.use('/auth', require('./auth'));
router.use('/users', require('./users'));
router.use('/user', require('./user'));
router.use('/remark_context', require('./remark_context'));



module.exports = router;
