/* Loads the model */
const model = require(appRoot + '/db/models/Model')('remarks');

/* Loads helpers and libraries */
const errorAction = require(appRoot + '/helpers/errors');
const errorHelper = require(appRoot + '/helpers/errors');
const util = require(appRoot + '/helpers/util');

const remarks = {};


remarks.listRemarks = (req, res, next) => {
    let where = {
        'description_remark': "%" + (req.query.content ? req.query.content : "") + "%",
    }

    try {
        context = JSON.parse(req.query.context)
        where.id_context = context
    } catch (error) {}
    
    model.readOrdered(['*'], where, {
        "date_remark" : req.query.order == "ASC" || req.query.order == "DESC" ? req.query.order : "DESC"
    }, (results, error) => {
        if (!error) {
            res.json(results);
        } else {
            let errors = errorHelper();
            errors.addErrorMessage('-1', error.sqlMessage);
            errors.sendErrors(res, 404);
        }
    });
}

remarks.readRemark = (req, res, next) => {
    const where = {"id_remark" : req.params.idRemark}
    model.read(['*'], where, (results, error) => {
        if (!error && results != 0) {
            res.json(results);
        } else {
            let errors = errorHelper();
            errors.addErrorMessage('NotFound', 'Not found - There is no Remark with this id');
            errors.sendErrors(res, 404);
        }
    });

}

remarks.addRemark = (req, res, next) => {
    let errors = errorAction();

    /* Check the input */
    if (!req.body.description_remark || !req.body.id_context) {
        errors.addErrorMessage('MissingParameters', "Bad Request - Your request is missing parameters");
    }

    /* Send errors input if there is any */
    if (errors.defined()) {
        errors.sendErrors(res, 400);
    } else {

        /* Check the user */
        req.tokenNotNeeded = true;
        const auth = require(appRoot + '/actions/auth');
    
        auth.validateToken(req, res, () => {
            const pseudo = req.dataToken ? req.dataToken.user.pseudo_user : null;
            
            
            data = {
                "description_remark": req.body.description_remark,
                "nb_seen_remark": 0,
                "nb_suffered_remark": 0,
                "date_remark": util.mysqlNow(),
                "id_context": req.body.id_context,
                "pseudo_user" : pseudo 
            }

            /* Creates the remark context */
            model.create(data, {}, (results, error) => {
                if (!error && results.affectedRows != 0) { /* Success */
                    res.status(201);
                    data.id_remark = results.insertId
                    res.json(data);
                } else {
                    errors.addErrorMessage('-1', error.sqlMessage);
                    errors.sendErrors(res, 409);
                }
            });


        })
    }
}

remarks.deleteRemark = (req, res, next) => {
    let errors = errorAction();
    const where = {"id_remark" : req.params.idRemark}

    modelResponses = require(appRoot + '/db/models/Model')("responses")
    modelResponses.delete(where, (results, error) => {
        if (!error) { /* Successfully deleted responses */
            model.delete(where, (results, error) => {
                if (!error) { /* Success remark */
                    res.sendStatus(200)
                } else {
                    errors.addErrorMessage('-1', error.sqlMessage);
                    errors.sendErrors(res, 409);
                }
            })
        } else {
            errors.addErrorMessage('-1', error.sqlMessage);
            errors.sendErrors(res, 409);
        }
    })
    

}

remarks.addSeen = (req, res, next) => {
    updateSeenSuffered(req.params.idRemark, "seen", 1, res)
}

remarks.removeSeen = (req, res, next) => {
    updateSeenSuffered(req.params.idRemark, "seen", -1, res)

}

remarks.addSuffered = (req, res, next) => {
    updateSeenSuffered(req.params.idRemark, "suffered", 1, res)

}

remarks.removeSuffered = (req, res, next) => {
    updateSeenSuffered(req.params.idRemark, "suffered", -1, res)
}

/**
 * Update the fields Seen or suffered by adding the value in parameter
 * @param {number} id        The id of the remark to update
 * @param {String} field     "seen" of "suffered"
 * @param {number} value     The value to add (can be a negative number)
 * @param {*} cb             Callback method
 */
const updateSeenSuffered = (idRemark, field, value, res) => {
    let data = {}

    model.read(['nb_seen_remark', 'nb_suffered_remark'], {"id_remark" : idRemark}, (results, error) => {

        if (!error && results != 0) {
            results = JSON.parse(JSON.stringify(results[0]))

            if (field == "seen") {
                let val =  results.nb_seen_remark + value
                if (val < 0) {
                    val = 0
                }
                data = { "nb_seen_remark" : val}
            } else {
                let val =  results.nb_suffered_remark + value
                if (val < 0) {
                    val = 0
                }
                data = { "nb_suffered_remark" :  val }
            }
            
        
            model.update(data, {"id_remark" : idRemark}, (results, error) => {
                if (!error && results.affectedRows != 0) { /* Success */
                    res.status(200);
                    res.end();
                } else {
                    let errors = errorAction();
                    errors.addErrorMessage('-1', error.sqlMessage);
                    errors.sendErrors(res, 409);
                }
            });

        } else {
            let errors = errorHelper();
            errors.addErrorMessage('NotFound', 'Not found - There is no Remark with this id');
            errors.sendErrors(res, 404);
        }
        
    });
    
}


module.exports = remarks;