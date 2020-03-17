var express = require('express');
var router = express.Router();
const remarksActions = require (appRoot + '/actions/remarks');
const auth = require (appRoot + '/actions/auth');


/**
 *  Routes of this ressource
 */
router.route('/')
    /**
     * @api {get} /remarks Get All Remarks
     * @apiDescription Get the list of all Remarks 
     * 
     * @apiName GetRemarks
     * @apiGroup Remarks
     * 
     * @apiParam {number[]} [context] Select only the remarks which have context in this array. Ex /remarks?context=["1","4"]
     * @apiParam {string} [content] Select the remarks with description that contains this string
     * @apiParam {string="date","popularity"} [sortby=date] Sort the remarks by the most recent or popularity
     * @apiParam {string="ASC","DESC"} [order=DESC] the order of the sort
     *  
     * @apiSuccess (200) {object[]} Remarks An array containing the Remarks 
     * @apiSuccess (200) {number} Remarks.id_remark The id
     * @apiSuccess (200) {String} Remarks.description_remark The content of the remark
     * @apiSuccess (200) {String} Remarks.nb_seen_remark The number of users that declared they have seen a situation like this one
     * @apiSuccess (200) {String} Remarks.nb_suffered_remark The number of users that declared they have suffered a situation like this one
     * @apiSuccess (200) {String} Remarks.date_remark The date this remark has been posted
     * @apiSuccess (200) {String} Remarks.pseudo_user The pseudo of the user who posted this remark, null if anonymous
     * @apiSuccess (200) {String} Remarks.id_context The id of the context of this remark
     */
    .get(remarksActions.listRemarks)

    /**
     * @api {post} /remarks Add a Remark 
     * @apiDescription Create a new Remark
     * 
     * @apiName PostRemarks
     * @apiGroup Remarks
     * 
     * @apiHeader [Authorization] Bearer token : The token of that authentify the user, if it isn't set, then the user will be considered as anonymous
     * 
     * @apiParam {String} description_remark The content of the remark
     * @apiParam {String} id_context The id of the context of this remark
     *
     * @apiSuccess (201) Created The Remark has been created
     * @apiError (400) MissingParameters The request is missing parameters
     * @apiError (401) InvalidJWTToken The jwt token is invalid
     */
    .post(remarksActions.addRemark)

router.route('/:idRemark')

    /**
     * @api {get} /remarks/:idRemark Get a Remark
     * @apiDescription Get the data of the Remark
     * 
     * @apiName GetRemark
     * @apiGroup Remarks 
     * 
     * @apiSuccess (200) {object} Remark The object containing the Remark data 
     * @apiSuccess (200) {number} Remark.id_remark The id
     * @apiSuccess (200) {String} Remark.description_remark The content of the remark
     * @apiSuccess (200) {String} Remark.nb_seen_remark The number of users that declared they have seen a situation like this one
     * @apiSuccess (200) {String} Remark.nb_suffered_remark The number of users that declared they have suffered a situation like this one
     * @apiSuccess (200) {String} Remark.date_remark The date this remark has been posted
     * @apiSuccess (200) {String} Remark.pseudo_user The pseudo of the user who posted this remark, null if anonymous
     * @apiSuccess (200) {String} Remark.id_context The id of the context of this remark
     * 
     * @apiError (404) NotFound The Remark doesn't exists
     */
    .get(remarksActions.readRemark)


    /**
     * @api {delete} /remarks/:idRemark Delete a Remark
     * @apiDescription Delete the Remark if the user is the owner of this remark or is an admin
     * 
     * @apiName DeleteRemark
     * @apiGroup Remarks 
     * 
     * @apiUse NeedToken
     * @apiPermission NeedToken
     * 
     * @apiSuccess (200) Success
     * @apiError (404) NotFound The Remark doesn't exists
     */
    .delete(remarksActions.deleteRemark)
    
    
    
router.route('/:idRemark/seen')

    /**
     * @api {put} /remarks/:idRemark/seen Seen +1
     * @apiDescription Increase the number of "seen" of this Remark by 1
     * 
     * @apiName PutSeen
     * @apiGroup Remarks 
     * 
     * @apiSuccess (200) Success
     * @apiError (404) NotFound The Remark doesn't exists
     */
    .put(remarksActions.addSeen)


    /**
     * @api {delete} /remarks/:idRemark/seen Seen -1
     * @apiDescription Decrease the number of "seen" of this Remark by 1
     * 
     * @apiName DeleteSeen
     * @apiGroup Remarks 
     * 
     * @apiSuccess (200) Success
     * @apiError (404) NotFound The Remark doesn't exists
     */
    .delete(remarksActions.removeSeen)


    router.route('/:idRemark/suffered')

    /**
     * @api {put} /remarks/:idRemark/suffered Suffered +1
     * @apiDescription Increase the number of "suffered" of this Remark by 1
     * 
     * @apiName PutSuffered
     * @apiGroup Remarks 
     * 
     * @apiSuccess (200) Success
     * @apiError (404) NotFound The Remark doesn't exists
     */
    .put(remarksActions.addSuffered)


    /**
     * @api {delete} /remarks/:idRemark/suffered Suffered -1
     * @apiDescription Decrease the number of "suffered" of this Remark by 1
     * 
     * @apiName DeleteSuffered
     * @apiGroup Remarks 
     * 
     * @apiSuccess (200) Success
     * @apiError (404) NotFound The Remark doesn't exists
     */
    .delete(remarksActions.removeSuffered)

module.exports = router;