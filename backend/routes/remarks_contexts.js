var express = require('express');
var router = express.Router();
const rcActions = require (appRoot + '/actions/remarks_contexts');
const auth = require (appRoot + '/actions/auth');


/**
 *  Routes of this ressource
 */
router.route('/')
    .get(rcActions.listRemarkContext)
    .post(auth.validateAdmin, rcActions.addRemarkContext)

router.route('/:idRemarkContext')
    .get(rcActions.readRemarkContext)
    .patch(auth.validateAdmin, rcActions.updateRemarkContext)
    .delete(auth.validateAdmin, rcActions.deleteRemarkContext)
    
module.exports = router;