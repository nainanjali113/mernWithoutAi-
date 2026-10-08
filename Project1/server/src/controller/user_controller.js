import { errorhandling } from '../error/all_error.js'
import { user_model } from '../model/user_model.js'

export const create_user = async (req, res) => {
    try {
        const data = req.body
        const { firstName, lastName, gender, email, password  } = data

        // console.log(data);

        const upload = await user_model.create(data)
        res.status(200).send({ status: true, success: true, data: upload })
    }
    catch (err) { errorhandling(err, res) }
}