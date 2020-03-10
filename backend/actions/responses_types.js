/* Loads the model */
const model = require(appRoot + '/db/models/Model')('responses_types');

/* Loads helpers and libraries */
const errorHelper = require(appRoot + '/helpers/errors');
const errorAction = require(appRoot + '/helpers/errors');

const response_types = {};

/**
 * Sends the Responses Types list (200)
 */
response_types.listResponsesTypes = (req, res, next) => {
    const sql = 'SELECT * FROM responses_types';
    pool.query(sql, (errors, results) => {
        res.json(results);
    });
}

/**
 * Load the data of the responses_types with id req.params.idRemarkContext add calls next with results (200)
 * If error : 404
 */
response_types.readResponsesTypes = (req, res, next) => {
    const where = {"id_response_type" : req.params.idResponseType}
    model.read(['*'], where, (results, error) => {
        if (!error && results != 0) {
            res.json(results);
        } else {
            let errors = errorHelper();
            errors.addErrorMessage('NotFound ', 'Not found - There is no Response Type with this id');
            errors.sendErrors(res, 404);
        }
    });
}

/**
 * Creates a new response type
 * the body must contain in the body : {name_response_type, emoji_response_type}
 * Send a 201 code if success, 400 if some data from the body is missing, 409 if error 
 */
response_types.addResponsesType = (req, res, next) => {
    let errors = errorAction();

    /* Check the input */
    if (!req.body.name_response_type || !req.body.emoji_response_type) {
        errors.addErrorMessage('MissingParameters', "Bad Request - Your request is missing parameters");
    }

    /* Send errors input if there is any */
    if (errors.defined()) {
        errors.sendErrors(res, 400);
    } else {
        data = {
            "name_response_type" : req.body.name_response_type,
            "emoji_response_type" : req.body.emoji_response_type
        }
        
        /* Creates the remark context */
        model.create(data, {}, (results, error) => {
            if (!error && results.affectedRows != 0) { /* Success */
                res.sendStatus(201)
            } else {
                errors.addErrorMessage('-1', error.sqlMessage);
                errors.sendErrors(res, 409);
            }
        });
        
    }

}

response_types.updateResponsesTypes = (req, res, next) => {

}

response_types.deleteResponsesTypes = (req, res, next) => {

}

module.exports = response_types;