/* Loads the model */
const model = require(appRoot + '/db/models/Model')('remarks');

/* Loads helpers and libraries */
const errorAction = require(appRoot + '/helpers/errors');
const util = require (appRoot + '/helpers/util');
const remarks_contexts = {};


remarks_contexts.listRemarks = (req, res, next) => {

}

remarks_contexts.readRemark = (req, res, next) => {

}

remarks_contexts.addRemark = (req, res, next) => {
    let errors = errorAction();

    /* Check the input */
    if (!req.body.description_remark || !req.body.id_context) {
        errors.addErrorMessage('MissingParameters', "Bad Request - Your request is missing parameters");
    }

    /* Send errors input if there is any */
    if (errors.defined()) {
        errors.sendErrors(res, 400);
    } else {
        req.tokenNotNeeded = true;

        
        //TODO require auth, check et decoder le token s'il existe, et inserer NULL ou le pseudo de l'utilisateur
        
        data = {
            "description_remark" : req.body.description_remark,
            "nb_seen_remark" : 0,
            "nb_suffered_remark" : 0,
            "date_remark" : util.mysqlNow(),
            "id_context" :  req.body.id_context
        }
        
        
    }
}

remarks_contexts.deleteRemark = (req, res, next) => {

}

remarks_contexts.addSeen = (req, res, next) => {

}

remarks_contexts.removeSeen = (req, res, next) => {

}

remarks_contexts.addSuffered = (req, res, next) => {

}

remarks_contexts.removeSuffered = (req, res, next) => {

}
module.exports = remarks_contexts;