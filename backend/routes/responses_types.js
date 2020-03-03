var express = require('express');
var router = express.Router();
const rtActions = require (appRoot + '/actions/responses_types');
const auth = require (appRoot + '/actions/auth');


/**
 *  Routes of this ressource
 */
router.route('/')
    .get(rtActions.listResponsesTypes)
    .post(auth.validateAdmin, rtActions.addResponsesType)

router.route('/:idResponseType')
    .get(rtActions.readResponsesTypes)
    .patch(auth.validateAdmin, rtActions.updateResponsesTypes)
    .delete(auth.validateAdmin, rtActions.deleteResponsesTypes)
    
module.exports = router;