var express = require('express');
var router = express.Router();


const auth = require (appRoot + '/actions/auth');
const userActions = require (appRoot + '/actions/users');
/**
 *  Routes of this ressource
 */
router.route('/')
    /**
     * @api {get} /users Get All Users
     * @apiDescription Get all users
     * 
     * @apiName GetUsers
     * @apiGroup Users
     *
     * @apiSuccess {Object[]} users The array of users
     * @apiSuccess {String} users.pseudo_user The pseudo of the user.
     * 
     */
    .get(userActions.listUsers)

    /**
     * @api {post} /users Add User
     * @apiDescription Create a new user 
     * 
     * @apiName PostUsers
     * @apiGroup Users
     *
     * @apiParam {String{4..}} pseudoUser User unique username.
     * @apiParam {String{5..}} passwordUser User password.
     *
     * @apiSuccess (201) {String} pseudo_user The pseudo of the user.
     * @apiError (400) MissingParameter The user doesn't exists
     * @apiError (400) PseudoLengthTooShort The pseudo length is too short
     * @apiError (400) PasswordLengthTooShort The password length is too short
     * @apiError (400) PseudoAlreadyUsed The pseudo already exists
     */
    .post(userActions.addUser);


    
module.exports = router;