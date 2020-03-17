var express = require('express');
var router = express.Router();
const actions = require (appRoot + '/actions/responses');
const auth = require (appRoot + '/actions/auth');



 /**
 * @apiDefine RemarkNotFound 
 * @apiError (404) RemarkNotFound The Remark doesn't exists
 */


router.route('/')
    /**
     * @api {get} /remarks/:idRemark/responses Get All Responses for a Remark
     * @apiDescription Get the list of all Responses for this Remark 
     * 
     * @apiName GetResponses
     * @apiGroup Responses
     * 
     * @apiParam {number[]} [type] Select only the Responses which have type in this array. Ex /remarks/1/Responses?type=["1","3"]
     * @apiParam {string="date","popularity"} [sortby=date] Sort the remarks by the most recent or popular
     * @apiParam {string="ASC","DESC"} [order=DESC] the order of the sort
     * 
     * @apiSuccess (200) {object[]} Responses An array containing the Responses 
     * @apiSuccess (200) {number} Responses.id_response The id
     * @apiSuccess (200) {String} Responses.description_response The content of the Response
     * @apiSuccess (200) {String} Responses.nb_likes_response The number of users that liked this Response
     * @apiSuccess (200) {String} Responses.nb_dislikes_response The number of users that disliked this Response
     * @apiSuccess (200) {String} Responses.date_remsponse The date this response has been posted
     * @apiSuccess (200) {String} Responses.pseudo_user The pseudo of the user who posted this response, null if anonymous
     * @apiSuccess (200) {String} Responses.id_responses_type The id of the type of this response
     * 
     * @apiUse RemarkNotFound
     */
    .get(actions.listResponses)

    /**
     * @api {post} /remarks/:idRemark/responses Add a Reponse 
     * @apiDescription Create a new Reponse
     * 
     * @apiName PostResponse
     * @apiGroup Responses
     * 
     * @apiHeader [Authorization] Bearer token : The token of that authentify the user, if it isn't set, then the user will be considered as anonymous
     * 
     * @apiParam {String} description_response The content of the response
     * @apiParam {String} id_response_type The id of the Response Type of this Reponse
     *
     * @apiSuccess (201) Created The Response has been created
     * @apiError (400) MissingParameters The request is missing parameters
     * @apiError (401) InvalidJWTToken The jwt token is invalid
     * 
     * @apiUse RemarkNotFound
     */
    .post(actions.addResponse)

router.route('/:idResponse')

    /**
     * @api {get} /remarks/:idRemark/responses/:idResponse Get a Response
     * @apiDescription Get the data of the Reponse
     * 
     * @apiName GetResponse
     * @apiGroup Responses 
     * 
     * @apiSuccess (200) {object} Response An object containing the Response data 
     * @apiSuccess (200) {number} Response.id_response The id
     * @apiSuccess (200) {String} Response.description_response The content of the Response
     * @apiSuccess (200) {String} Response.nb_likes_response The number of users that liked this Response
     * @apiSuccess (200) {String} Response.nb_dislikes_response The number of users that disliked this Response
     * @apiSuccess (200) {String} Response.date_remsponse The date this response has been posted
     * @apiSuccess (200) {String} Response.pseudo_user The pseudo of the user who posted this response, null if anonymous
     * @apiSuccess (200) {String} Response.id_responses_type The id of the type of this response
     * 
     * @apiUse RemarkNotFound
     * 
     * @apiError (404) NotFound The Reponse doesn't exists
     */
    .get(actions.readResponse)


    /**
     * @api {delete} /remarks/:idRemark/responses/:idResponse Delete a Response
     * @apiDescription Delete the Reponse if the user is the owner of this Reponse or is an admin
     * 
     * @apiName DeleteResponse
     * @apiGroup Responses 
     * 
     * @apiUse NeedToken
     * @apiPermission NeedToken
     * 
     * @apiSuccess (200) Success
     * 
     * @apiUse RemarkNotFound
     * @apiError (404) NotFound The Response doesn't exists
     */
    .delete(actions.deleteResponse)
    
    

router.route('/:idResponse/like')

    /**
     * @api {put} /remarks/:idRemark/responses/:idResponse/like Like a Response
     * @apiDescription Increase the number of "like" of this Response by 1
     * 
     * @apiName Putlike
     * @apiGroup Responses 
     * 
     * @apiSuccess (200) Success
     * @apiUse RemarkNotFound
     * @apiError (404) NotFound The Response doesn't exists
     */
    .put(actions.like)


    /**
     * @api {delete} /remarks/:idRemark/responses/:idResponse/like UnLike a Response
     * @apiDescription Decrease the number of "like" of this Response by 1
     * 
     * @apiName Deletelike
     * @apiGroup Responses 
     * 
     * @apiSuccess (200) Success
     * @apiUse RemarkNotFound
     * @apiError (404) NotFound The Response doesn't exists
     */
    .delete(actions.unlike)

router.route('/:idResponse/dislike')
    /**
     * @api {put} /remarks/:idRemark/responses/:idResponse/dislike Dislike a Response
     * @apiDescription Increase the number of "dislike" of this Response by 1
     * 
     * @apiName PutDislike
     * @apiGroup Responses 
     * 
     * @apiSuccess (200) Success
     * @apiUse RemarkNotFound
     * @apiError (404) NotFound The Response doesn't exists
     */
    .put(actions.dislike)

    /**
     * @api {delete} /remarks/:idRemark/responses/:idResponse/like UnDislike a Response
     * @apiDescription Decrease the number of "dislike" of this Response by 1
     * 
     * @apiName DeleteDislike
     * @apiGroup Responses 
     * 
     * @apiSuccess (200) Success
     * @apiUse RemarkNotFound
     * @apiError (404) NotFound The Response doesn't exists
     */
    .delete(actions.undislike)

module.exports = router;