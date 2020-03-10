var express = require('express');
var router = express.Router();
const rtActions = require (appRoot + '/actions/responses_types');
const auth = require (appRoot + '/actions/auth');


/**
 *  Routes of this ressource
 */
router.route('/')
    /**
     * @api {get} /responses_types Get All Responses Types
     * @apiDescription Get the list of all Responses Types
     * 
     * @apiName GetResponsesTypes
     * @apiGroup Responses Types
     *
     * @apiSuccess (200) {object[]} ResponseTypes An array containing the Responses Types
     * @apiSuccess (200) {integer} ResponseTypes.id_response_type The id
     * @apiSuccess (200) {String} ResponseTypes.name_response_type The name
     * @apiSuccess (200) {String} ResponseTypes.emoji_response_type The emoji associated
     */
    .get(rtActions.listResponsesTypes)

    /**
     * @api {post} /responses_types Add a Responses Type
     * @apiDescription Create a new Responses Type
     * 
     * @apiName PostResponsesTypes
     * @apiGroup Responses Types
     *
     * @apiUse NeedToken
     * @apiUse MustBeAdmin
     * 
     * 
     * @apiParam {String} name_response_type The name of the Responses Type.
     * @apiParam {String} emoji_response_type The emoji associated with this responses type.
     *
     * @apiSuccess (201) Created The Response type has been created
     * @apiError (400) MissingParameters The request is missing parameters
     */
    .post(auth.validateAdmin, rtActions.addResponsesType)

router.route('/:idResponseType')

    /**
     * @api {get} /responses_types/:idResponseType Get a Responses Type
     * @apiDescription Get the data of the Responses Type
     * 
     * @apiName GetResponsesType
     * @apiGroup Responses Types
     * 
     * 
     * @apiSuccess (200) {integer} id_response_type The id
     * @apiSuccess (200) {String} name_response_type The name
     * @apiSuccess (200) {String} emoji_response_type The emoji associated
     *
     * @apiError (404) NotFound The ResponseType doesn't exists
     */
    .get(rtActions.readResponsesTypes)

        
    .patch(auth.validateAdmin, rtActions.updateResponsesTypes)
    .delete(auth.validateAdmin, rtActions.deleteResponsesTypes)
    
module.exports = router;