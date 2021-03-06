var express = require('express');
var router = express.Router();

/**
 *  Sub ressources
 */
router.use('/auth', require('./auth'));
router.use('/users', require('./users'));
router.use('/user', require('./user'));
router.use('/remarks_contexts', require('./remarks_contexts'));
router.use('/responses_types', require('./responses_types'));
router.use('/remarks', require('./remarks'));
router.use('/remarks/:idRemark/responses', (req, res, next) => {
    req.idRemark = req.params.idRemark;
    next();
}, require('./responses'))

module.exports = router;
