import { errorhandling } from '../error/all_error.js'
import { user_schema } from '../model/user_model.js'

export const create_user = async (req, res) => {
    try {
        const data = req.body
        const { firstName, lastName, gender, email, password } = data

        const Upload = await user_schema.create(data)
        res.status(200).send({ status: true, success: true, msg: data })
    }
    catch (err) { errorhandling(err, res) }
}