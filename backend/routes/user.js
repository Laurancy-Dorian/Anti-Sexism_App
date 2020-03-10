var express = require('express');
var router = express.Router();


const auth = require (appRoot + '/actions/auth');
const userActions = require (appRoot + '/actions/users');

const addIdUserToRouter = (req, res, next) => {
    req.pseudoUser = req.params.pseudoUser;
    next();
};



/**
 * @api {get} /user/:pseudoUser Get User
 * @apiDescription Get the user information
 * 
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {String} pseudoUser User unique username.
 *
 * @apiSuccess {String} pseudo_user The pseudo of the user.
 * @apiError (404) UserDoesntExists The user doesn't exists
 */
router.route('/:pseudoUser')
    .get(addIdUserToRouter, userActions.getUser)

    
module.exports = router;