var express = require('express');
var router = express.Router();
var authActions = require (appRoot + '/actions/auth');

/**
 *  Routes of this ressource
 */
router.route('/')
    .post(authActions.login)


module.exports = router;
