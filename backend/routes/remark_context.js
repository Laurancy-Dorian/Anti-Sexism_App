var express = require('express');
var router = express.Router();
//var rcActions = require (appRoot + '/actions/remark_context');


/**
 *  Routes of this ressource
 */
router.route('/')
    .post(authActions.login)


    
module.exports = router;