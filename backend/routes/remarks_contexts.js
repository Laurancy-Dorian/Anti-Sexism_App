var express = require('express');
var router = express.Router();
const rcActions = require (appRoot + '/actions/remarks_contexts');
const auth = require (appRoot + '/actions/auth');


/**
 *  Routes of this ressource
 */
router.route('/')
    /**
     * @api {get} /remarks_contexts Get All Remarks Contexts
     * @apiDescription Get the list of all Remarks Contexts
     * 
     * @apiName GetRemarksContexts
     * @apiGroup Remarks Contexts
     *
     * @apiSuccess (200) {object[]} RemarksContexts An array containing the Remarks Contexts
     * @apiSuccess (200) {integer} RemarksContexts.id_context The id
     * @apiSuccess (200) {String} RemarksContexts.name_context The name
     * @apiSuccess (200) {string} RemarksContexts.color_context The color associated
     */
    .get(rcActions.listRemarkContext)

    /**
     * @api {post} /remarks_contexts Add a Remark Context
     * @apiDescription Create a new Remark Context
     * 
     * @apiName PostRemarksContexts
     * @apiGroup Remarks Contexts
     *
     * @apiUse NeedToken
     * @apiUse MustBeAdmin
     * @apiPermission MustBeAdmin
     * @apiPermission NeedToken
     * 
     * @apiParam {String} name_context The name of the Remarks Context.
     * @apiParam {String} color_context The color of the Remarks Context in hex format.
     *
     * @apiSuccess (201) Created The Remarks Context has been created
     * @apiError (400) MissingParameters The request is missing parameters
     */
    .post(auth.validateAdmin, rcActions.addRemarkContext)

router.route('/:idRemarkContext')

    /**
     * @api {get} /remarks_contexts/:idRemarksContext Get a Remarks Context
     * @apiDescription Get the data of the Remark Context
     * 
     * @apiName GetRemarksContext
     * @apiGroup Remarks Contexts
     * 
     * @apiSuccess (200) {integer} id_context The id
     * @apiSuccess (200) {String} name_context The name
     * @apiSuccess (200) {integer} color_context The color associated
     * @apiError (404) NotFound The Remark Context doesn't exists
     */
    .get(rcActions.readRemarkContext)

    /**
     * @api {patch} /remarks_contexts/:idRemarksContext Update a Remarks Context
     * @apiDescription Update the data of the Remark Context
     * 
     * @apiName PatchRemarksContext
     * @apiGroup Remarks Contexts
     * 
     * @apiParam {String} [name_context] The name of the Remarks Context.
     * @apiParam {String} [color_context] The color of the Remarks Context in hex format.
     * 
     * @apiUse NeedToken
     * @apiUse MustBeAdmin
     * @apiPermission MustBeAdmin
     * @apiPermission NeedToken
     * 
     * @apiSuccess (200) {object} RemarksContext the Remarks Contexts
     * @apiSuccess (200) {integer} RemarksContext.id_context The id
     * @apiSuccess (200) {String} RemarksContext.name_context The name
     * @apiSuccess (200) {string} RemarksContext.color_context The color associated
     * @apiError (404) NotFound The Remark Context doesn't exists
     */
    .patch(auth.validateAdmin, rcActions.updateRemarkContext)

    /**
     * @api {delete} /remarks_contexts/:idRemarksContext Delete a Remarks Context
     * @apiDescription Delete the Remark Context
     * 
     * @apiName DeleteRemarksContext
     * @apiGroup Remarks Contexts
     * 
     * @apiUse NeedToken
     * @apiUse MustBeAdmin
     * @apiPermission MustBeAdmin
     * @apiPermission NeedToken
     * 
     * @apiError (404) NotFound The Remark Context doesn't exists
     */
    .delete(auth.validateAdmin, rcActions.deleteRemarkContext)
    
module.exports = router;