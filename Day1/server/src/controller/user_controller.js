import { errorhandling } from '../error/all_error.js'

export const create_user = (req, res) => {
    res.status(200).send({ status: true, success: true, msg: "Hello anjani" })
}