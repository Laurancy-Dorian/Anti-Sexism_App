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
     * @apiPermission MustBeAdmin
     * @apiPermission NeedToken
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
     * @apiSuccess (200) {object} ReponseType the Response Type
     * @apiSuccess (200) {integer} ReponseType.id_response_type The id
     * @apiSuccess (200) {String} ReponseType.name_response_type The name
     * @apiSuccess (200) {String} ReponseType.emoji_response_type The emoji associated
     *
     * @apiError (404) NotFound The ResponseType doesn't exists
     */
    .get(rtActions.readResponsesTypes)

        
    /**
     * @api {patch} /responses_types/:idResponseType Update a Responses Type
     * @apiDescription Update the data of the Remark Context
     * 
     * @apiName PatchResponsesType
     * @apiGroup Responses Types
     * 
     * @apiParam {String} [name_response_type] The name of the Responses Type.
     * @apiParam {String} [emoji_response_type] The emoji associated with this responses type.
     * 
     * @apiUse NeedToken
     * @apiUse MustBeAdmin
     * @apiPermission MustBeAdmin
     * @apiPermission NeedToken
     * 
     * @apiSuccess (200) {object} ReponseType the Response Type
     * @apiSuccess (200) {integer} ReponseType.id_response_type The id
     * @apiSuccess (200) {String} ReponseType.name_response_type The name
     * @apiSuccess (200) {String} ReponseType.emoji_response_type The emoji associated
     * @apiError (404) NotFound The Responses Type doesn't exists
     */
    .patch(auth.validateAdmin, rtActions.updateResponsesTypes)

    /**
     * @api {delete} /responses_types/:idResponseType Delete a Responses Type
     * @apiDescription Delete the Remark Context
     * 
     * @apiName DeleteResponsesType
     * @apiGroup Responses Types
     * 
     * @apiUse NeedToken
     * @apiUse MustBeAdmin
     * @apiPermission MustBeAdmin
     * @apiPermission NeedToken
     * 
     * @apiError (404) NotFound The Responses Type doesn't exists
     */
    .delete(auth.validateAdmin, rtActions.deleteResponsesTypes)
    
module.exports = router;