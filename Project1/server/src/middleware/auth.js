import { errorhandling } from "../error/all_error.js";

export const user_authenticate = (req, res, next) => {
    try {
        next()
    }
    catch (err) { errorhandling(err, res) }
}

export const user_authorization = (req, res, next) => {
    try {
        next()
    }
    catch (err) { errorhandling(err, res) }
}

export const admin_authenticate = (req, res, next) => {
    try {

    }
    catch (err) { errorhandling(err, res) }
}

export const admin_authorization = (req, res, next) => {
    try {

    }
    catch (err) { errorhandling(err, res) }
}