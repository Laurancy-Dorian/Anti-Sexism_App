var express = require('express');
var router = express.Router();
var authActions = require (appRoot + '/actions/auth');


/**
 * @apiDefine NeedToken
 * The json Web token (jwt) is needed 
 * @apiHeader Authorization Bearer token : The token is the jwt token given when successfully reached POST /auth
 * @apiError (401) InvalidJWTToken The jwt token is invalid
 * @apiError (401) AuthorizationHeaderNotDefined The Authorization header is not defined
 */


 /**
 * @apiDefine MustBeAdmin 
 * The user must be admin to reach this ressource
 * @apiError (403) NotAnAdmin The user is authentified but is not an admin, they may not access this ressource
 */


/**
 * @api {post} /auth Athentification 
 * @apiDescription Authentification process <br/>
 * If the user is successfully logged in, this will return a json web 
 * token (jwt) that must be sent in a Bearer Header
 * 
 * @apiName PostAuth
 * @apiGroup Auth
 *
 * @apiParam {String} pseudo_user User unique username.
 * @apiParam {String} password_user User password
 *
 * @apiSuccess {String} token The jwt token.
 * @apiError (400) InvalidUsername The username of the user is invalid
 * @apiError (400) InvalidPassword The password of the user is invalid
 */
router.route('/')
    .post(authActions.login)




module.exports = router;
