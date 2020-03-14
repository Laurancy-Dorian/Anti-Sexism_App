/* Loads the model */
const model = require(appRoot + '/db/models/Model')('remarks');

/* Loads helpers and libraries */
const errorHelper = require(appRoot + '/helpers/errors');

const remarks_contexts = {};

remarks_contexts.listRemarks = (req, res, next) => {

}

remarks_contexts.readRemark = (req, res, next) => {

}

remarks_contexts.addRemark = (req, res, next) => {
    
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