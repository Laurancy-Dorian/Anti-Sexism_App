/* Loads the model */
const model = require(appRoot + '/db/models/Model')('remarks_contexts');

/* Loads helpers and libraries */
const errorHelper = require(appRoot + '/helpers/errors');
const util = require (appRoot + '/helpers/util');
const errorAction = require(appRoot + '/helpers/errors');

const remarks_contexts = {};

/**
 * Sends the RemarkContext list (200)
 */
remarks_contexts.listRemarkContext = (req, res, next) => {
    const sql = 'SELECT * FROM remarks_contexts';
    pool.query(sql, (errors, results) => {
        res.json(results);
    });
}

/**
 * Load the data of the remark_context with id req.idRemarkContext add calls next with results (200)
 * If error : 404
 */
remarks_contexts.readRemarkContext = (req, res, next) => {
    const where = {"id_context" : req.params.idRemarkContext}
    model.read(['*'], where, (results, error) => {
        if (!error && results != 0) {
            res.json(results);
        } else {
            let errors = errorHelper();
            errors.addErrorMessage('40402 ', 'Not found - There is no Remark Context with this id');
            errors.sendErrors(res, 404);
        }
    });
}

/**
 * Creates a new remark context
 * the body must contain in the body : {name_context, color_context}
 * Send a 201 code if success, 400 if some data from the body is missing, 409 if error 
 */
remarks_contexts.addRemarkContext = (req, res, next) => {
    let errors = errorAction();

    /* Check the input */
    if (!req.body.name_context || !req.body.color_context) {
        errors.addErrorMessage('40001', "Bad Request - Your request is missing parameters");
    }

    /* Send errors input if there is any */
    if (errors.defined()) {
        errors.sendErrors(res, 400);
    } else {

        data = {
            "name_context" : req.body.name_context,
            "color_context" : req.body.color_context
        }
        
        /* Creates the remark context */
        model.create(data, {}, (results, error) => {
            if (!error && results.affectedRows != 0) { /* Success */
                res.sendStatus(201);
            } else {
                errors.addErrorMessage('-1', error.sqlMessage);
                errors.sendErrors(res, 409);
            }
        });
        
    }

}

remarks_contexts.updateRemarkContext = (req, res, next) => {

}

remarks_contexts.deleteRemarkContext = (req, res, next) => {

}

module.exports = remarks_contexts;