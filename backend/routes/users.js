var express = require('express');
var router = express.Router();


const auth = require (appRoot + '/actions/auth');
const userActions = require (appRoot + '/actions/users');
/**
 *  Routes of this ressource
 */
router.route('/')
    .get(userActions.listUsers)
    .post(userActions.addUser);


    
module.exports = router;