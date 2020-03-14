/* Loads the model */
const model = require(appRoot + '/db/models/Model')('remarks');

/* Loads helpers and libraries */
const errorHelper = require(appRoot + '/helpers/errors');

const remarks_contexts = {};

remarks_contexts.listResponses = (req, res, next) => {

}

remarks_contexts.readResponse = (req, res, next) => {

}

remarks_contexts.addResponse = (req, res, next) => {
    
}

remarks_contexts.deleteResponse = (req, res, next) => {

}


module.exports = remarks_contexts;