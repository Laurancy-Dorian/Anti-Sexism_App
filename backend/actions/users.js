const table = 'users';
const model = require(appRoot + '/db/models/Model')(table);
const errorAction = require(appRoot + '/helpers/errors');
const bcrypt = require('bcrypt');
const auth = require(appRoot + '/actions/auth');
const util = require(appRoot + '/helpers/util');

const users = {};

/**
 * Sends the users list (id and pseudo)
 */
users.listUsers = (req, res, next) => {
    const fields = ['pseudo_user'];
    model.read(fields, {}, (results) => {
        res.json(results);
    });
}

/**
 * Adds a user to the database.
 * Sends a 400 error if data is wrong
 */
users.addUser = (req, res, next) => {
    let errors = errorAction();


    /* Check the input */
    if (!req.body.pseudo_user || !req.body.password_user) {
        console.log(req)
        errors.addErrorMessage('MissingParameter', "Bad Request - Your request is missing parameters");
    }
    if (req.body.pseudo_user && req.body.pseudo_user.length < 4) {
        errors.addErrorMessage('PseudoLengthTooShort', "Bad Request - Your pseudo length has to be > 3");
    }
    if (req.body.password_user && req.body.password_user.length < 5) {
        errors.addErrorMessage('PasswordLengthTooShort', "Bad Request - Your password length has to be > 4");
    }


    /* Send errors input if there is sny */
    if (errors.defined()) {
        errors.sendErrors(res, 400);
    } else {
        /* Hash the password */
        bcrypt.hash(req.body.password_user, 10, function (err, hash) {

            req.body.password_user = hash;

            /* Creates the user */
            model.create(req.body, {}, (results, error) => {
                if (!error && results.affectedRows != 0) { /* Success */
                    res.status(201).json({
                        'pseudo_user': req.body.pseudo_user,
                        'is_admin_user' : false
                    });
                } else {
                    if (error.code == 'ER_DUP_ENTRY') { /* Database error */
                        errors.addErrorMessage('PseudoAlreadyUsed', "Pseudo already used - " + error.sqlMessage);
                    } else {
                        errors.addErrorMessage('-1', error.sqlMessage);
                    }
                    errors.sendErrors(res, 409);
                }
            });
        });
    }

}

/**
 * Gets a user to the database.
 * Sends a 404 error if the id is wrong
 */
users.getUser = (req, res, next) => {
    let errors = errorAction();
    const fields = ['pseudo_user'];
    const where = {'pseudo_user': req.pseudoUser};
    model.read(fields, where, (results, error) => {
        if (!error && results.length > 0) {
            res.json(results[0]);
        } else {
            errors.addErrorMessage('UserDoesntExists ', 'Error 404 - There is no user with this id');
            errors.sendErrors(res, 404);
        }
    });
}

module.exports = users;