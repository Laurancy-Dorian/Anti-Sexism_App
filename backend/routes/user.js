var express = require('express');
var router = express.Router();


const auth = require (appRoot + '/actions/auth');
const userActions = require (appRoot + '/actions/users');
/**
 *  Routes of this ressource
 */
const addIdUserToRouter = (req, res, next) => {
    req.pseudoUser = req.params.pseudoUser;
    next();
};

router.route('/:pseudoUser')
    .get(addIdUserToRouter, userActions.getUser)

    
module.exports = router;