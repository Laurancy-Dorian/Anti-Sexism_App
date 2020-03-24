/* Loads the model */
const model = require(appRoot + '/db/models/Model')('responses');

/* Loads helpers and libraries */
const errorAction = require(appRoot + '/helpers/errors');
const errorHelper = require(appRoot + '/helpers/errors');

const util = require(appRoot + '/helpers/util');

const responses = {};

responses.listResponses = (req, res, next) => {
    let errors = errorHelper();

    let where = {
        "id_remark" : req.idRemark,
    }

    try {
        type = JSON.parse(req.query.type)
        where.id_response_type = type
    } catch (error) {}
    
    model.readOrdered(['*'], where, {
        "date_response" : req.query.order == "ASC" || req.query.order == "DESC" ? req.query.order : "DESC"
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

responses.readResponse = (req, res, next) => {
    const where = {"id_remark" : req.idRemark, "id_response" : req.params.idResponse}
    model.read(['*'], where, (results, error) => {
        if (!error && results != 0) {
            res.json(results);
        } else {
            let errors = errorAction();
            errors.addErrorMessage('NotFound', 'Not found - There is no Response with this id');
            errors.sendErrors(res, 404);
        }
    });
}

responses.addResponse = (req, res, next) => {
    let errors = errorAction();

    /* Check the input */
    if (!req.body.description_response || !req.body.id_response_type) {
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
                "description_response": req.body.description_response,
                "nb_likes_response": 0,
                "nb_dislikes_response": 0,
                "date_response": util.mysqlNow(),
                "id_response_type": req.body.id_response_type,
                "pseudo_user" : pseudo,
                "id_remark" : req.idRemark
            }

            /* Creates the remark context */
            model.create(data, {}, (results, error) => {
                if (!error && results.affectedRows != 0) { /* Success */
                    res.status(201);
                    data.id_response = results.insertId
                    res.json(data);
                } else {
                    errors.addErrorMessage('-1', error.sqlMessage);
                    errors.sendErrors(res, 409);
                }
            });


        })
    }
}

responses.deleteResponse = (req, res, next) => {
}

responses.like = (req, res, next) => {
    updateLikeDislike(req.params.idResponse, "like", 1, res)

}

responses.unlike = (req, res, next) => {
    updateLikeDislike(req.params.idResponse, "like", -1, res)

}

responses.dislike = (req, res, next) => {
    updateLikeDislike(req.params.idResponse, "dislike", 1, res)

}

responses.undislike = (req, res, next) => {
    updateLikeDislike(req.params.idResponse, "dislike", -1, res)

}

/**
 * Update the fields like or dislike by adding the value in parameter
 * @param {number} id        The id of the remark to update
 * @param {String} field     "like" of "dislike"
 * @param {number} value     The value to add (can be a negative number)
 * @param {*} cb             Callback method
 */
const updateLikeDislike = (idResponse, field, value, res) => {
    let data = {}

    model.read(['nb_likes_response', 'nb_dislikes_response'], {"id_response" : idResponse}, (results, error) => {

        if (!error && results != 0) {
            results = JSON.parse(JSON.stringify(results[0]))

            if (field == "like") {
                let val =  results.nb_likes_response + value
                if (val < 0) {
                    val = 0
                }
                data = { "nb_likes_response" : val}
            } else {
                let val =  results.nb_dislikes_response + value
                if (val < 0) {
                    val = 0
                }
                data = { "nb_dislikes_response" :  val }
            }
            
        
            model.update(data, {"id_response" : idResponse}, (results, error) => {
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


module.exports = responses;